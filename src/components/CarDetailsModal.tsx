import React from 'react';
import { Car as CarType } from '../types';
import { X, Calendar, Gauge, Fuel, Settings, MapPin, Palette } from 'lucide-react';

interface CarDetailsModalProps {
  car: CarType | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestPurchase?: (car: CarType) => void;
}

const CarDetailsModal: React.FC<CarDetailsModalProps> = ({
  car,
  isOpen,
  onClose,
  onRequestPurchase
}) => {
  if (!isOpen || !car) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {car.year} {car.make} {car.model}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={car.images[0] || 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              {car.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {car.images.slice(1, 4).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${car.make} ${car.model} ${index + 2}`}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Price */}
              <div className="text-3xl font-bold text-blue-600">
                ${car.price.toLocaleString()}
              </div>

              {/* Status */}
              <div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  car.status === 'available' 
                    ? 'bg-green-100 text-green-800' 
                    : car.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                </span>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Year</div>
                    <div className="font-medium">{car.year}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Mileage</div>
                    <div className="font-medium">{car.mileage.toLocaleString()} km</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Fuel className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Fuel Type</div>
                    <div className="font-medium">{car.fuel_type}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Transmission</div>
                    <div className="font-medium">{car.transmission}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Color</div>
                    <div className="font-medium">{car.color}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">{car.location}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>

              {/* Action Button */}
              {onRequestPurchase && car.status === 'available' && (
                <button
                  onClick={() => onRequestPurchase(car)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Request Purchase
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;