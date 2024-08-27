import React from 'react';

export const Card = ({ className, ...props }) => (
  <div
    className={`bg-white overflow-hidden shadow-md rounded-lg ${className}`}
    {...props}
  />
);

export const CardHeader = ({ className, ...props }) => (
  <div
    className={`px-4 py-5 sm:px-6 border-b border-gray-200 ${className}`}
    {...props}
  />
);

export const CardTitle = ({ className, ...props }) => (
  <h3
    className={`text-lg leading-6 font-medium text-gray-900 ${className}`}
    {...props}
  />
);

export const CardDescription = ({ className, ...props }) => (
  <p
    className={`mt-1 max-w-2xl text-sm text-gray-500 ${className}`}
    {...props}
  />
);

export const CardContent = ({ className, ...props }) => (
  <div className={`px-4 py-5 sm:p-6 ${className}`} {...props} />
);

export const CardFooter = ({ className, ...props }) => (
  <div
    className={`px-4 py-4 sm:px-6 border-t border-gray-200 ${className}`}
    {...props}
  />
);

export const CardActions = ({ className, ...props }) => (
  <div
    className={`flex items-center justify-end space-x-3 ${className}`}
    {...props}
  />
);

export const CardList = ({ className, ...props }) => (
  <ul className={`divide-y divide-gray-200 ${className}`} {...props} />
);

export const CardListItem = ({ className, ...props }) => (
  <li className={`py-4 ${className}`} {...props} />
);

export const CardStat = ({ label, value, className, ...props }) => (
  <div className={`${className}`} {...props}>
    <dt className="text-sm font-medium text-gray-500 truncate">{label}</dt>
    <dd className="mt-1 text-3xl font-semibold text-gray-900">{value}</dd>
  </div>
);
