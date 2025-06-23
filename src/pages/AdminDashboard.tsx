import React, { useState, useEffect } from 'react';
import { Car as CarType, PurchaseRequest } from '../types';
import { supabase } from '../lib/supabase';
import { Eye, Edit, Trash2, Check, X, Clock } from 'lucide-react';
import CarCard from '../components/CarCard';
import CarDetailsModal from '../components/CarDetailsModal';

const AdminDashboard: React.FC = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [requests, setRequests] = useState<PurchaseRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'cars' | 'requests'>('cars');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [carsResponse, requestsResponse] = await Promise.all([
        supabase.from('cars').select('*').order('created_at', { ascending: false }),
        supabase.from('purchase_requests').select('*').order('created_at', { ascending: false })
      ]);

      if (carsResponse.error) throw carsResponse.error;
      if (requestsResponse.error) throw requestsResponse.error;

      setCars(carsResponse.data || []);
      setRequests(requestsResponse.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCar = async (carId: string) => {
    if (!confirm('Are you sure you want to delete this car?')) return;

    try {
      const { error } = await supabase
        .from('cars')
        .delete()
        .eq('id', carId);

      if (error) throw error;
      fetchData();
    } catch (error) {
      console.error('Error deleting car:', error);
      alert('Failed to delete car');
    }
  };

  const handleUpdateRequestStatus = async (requestId: string, status: 'approved' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('purchase_requests')
        .update({ status })
        .eq('id', requestId);

      if (error) throw error;
      fetchData();
    } catch (error) {
      console.error('Error updating request status:', error);
      alert('Failed to update request status');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'approved':
        return <Check className="h-4 w-4 text-green-500" />;
      case 'rejected':
        return <X className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage cars and purchase requests</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-2xl font-bold text-blue-600">{cars.length}</div>
          <div className="text-gray-600">Total Cars</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-2xl font-bold text-green-600">
            {cars.filter(car => car.status === 'available').length}
          </div>
          <div className="text-gray-600">Available</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-2xl font-bold text-yellow-600">
            {requests.filter(req => req.status === 'pending').length}
          </div>
          <div className="text-gray-600">Pending Requests</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-2xl font-bold text-purple-600">{requests.length}</div>
          <div className="text-gray-600">Total Requests</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('cars')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'cars'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Cars Management
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'requests'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Purchase Requests
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'cars' ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">All Cars</h2>
              </div>
              
              {cars.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No cars found</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cars.map(car => (
                    <div key={car.id} className="relative">
                      <CarCard
                        car={car}
                        onViewDetails={(car) => {
                          setSelectedCar(car);
                          setShowDetailsModal(true);
                        }}
                        showActions={false}
                      />
                      <div className="absolute top-2 right-2 flex space-x-1">
                        <button
                          onClick={() => {
                            setSelectedCar(car);
                            setShowDetailsModal(true);
                          }}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          <Eye className="h-4 w-4 text-blue-600" />
                        </button>
                        <button
                          onClick={() => handleDeleteCar(car.id)}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Purchase Requests</h2>
              </div>
              
              {requests.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No purchase requests found</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {requests.map(request => {
                    const car = cars.find(c => c.id === request.car_id);
                    return (
                      <div key={request.id} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              {getStatusIcon(request.status)}
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                request.status === 'pending' 
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : request.status === 'approved'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {car ? `${car.year} ${car.make} ${car.model}` : 'Car not found'}
                            </h3>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p><strong>Customer:</strong> {request.user_name}</p>
                              <p><strong>Email:</strong> {request.user_email}</p>
                              <p><strong>Phone:</strong> {request.user_phone}</p>
                              {request.message && (
                                <p><strong>Message:</strong> {request.message}</p>
                              )}
                              <p><strong>Requested:</strong> {new Date(request.created_at).toLocaleDateString()}</p>
                            </div>
                          </div>
                          
                          {request.status === 'pending' && (
                            <div className="flex space-x-2 ml-4">
                              <button
                                onClick={() => handleUpdateRequestStatus(request.id, 'approved')}
                                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm transition-colors"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleUpdateRequestStatus(request.id, 'rejected')}
                                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-colors"
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Car Details Modal */}
      <CarDetailsModal
        car={selectedCar}
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
      />
    </div>
  );
};

export default AdminDashboard;