import React from 'react';
import { Car as CarType } from '../types';
import { Calendar, Gauge, Fuel, Settings, MapPin, Eye } from 'lucide-react';

interface CarCardProps {
  car: CarType;
  onViewDetails: (car: CarType) => void;
  onRequestPurchase?: (car: CarType) => void;
  showActions?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ 
  car, 
  onViewDetails, 
  onRequestPurchase, 
  showActions = true 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.images[0] || 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            car.status === 'available' 
              ? 'bg-green-100 text-green-800' 
              : car.status === 'pending'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">
            ${car.price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {car.year} {car.make} {car.model}
        </h3>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{car.year}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Gauge className="h-4 w-4" />
            <span className="text-sm">{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Fuel className="h-4 w-4" />
            <span className="text-sm">{car.fuel_type}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Settings className="h-4 w-4" />
            <span className="text-sm">{car.transmission}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{car.location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {car.description}
        </p>

        {/* Actions */}
        {showActions && (
          <div className="flex space-x-3">
            <button
              onClick={() => onViewDetails(car)}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Eye className="h-4 w-4" />
              <span>View Details</span>
            </button>
            {onRequestPurchase && car.status === 'available' && (
              <button
                onClick={() => onRequestPurchase(car)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Request Purchase
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCard;