import React, { useState } from 'react';

const SizeChartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const sizeData = [
    { size: 'S', chest: '36-38', waist: '30-32', hips: '38-40' },
    { size: 'M', chest: '38-40', waist: '32-34', hips: '40-42' },
    { size: 'L', chest: '40-42', waist: '34-36', hips: '42-44' },
    { size: 'XL', chest: '42-44', waist: '36-38', hips: '44-46' },
  ];

  return (
    <>
      <button
        className="text-sm text-indigo-600 hover:text-indigo-800"
        onClick={() => setIsOpen(true)}
      >
        Size Chart
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full mx-4">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-medium">Size Chart</h3>
              <button
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-3 text-left">Size</th>
                    <th className="py-2 px-3 text-left">Chest (in)</th>
                    <th className="py-2 px-3 text-left">Waist (in)</th>
                    <th className="py-2 px-3 text-left">Hips (in)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeData.map((row) => (
                    <tr key={row.size} className="border-b">
                      <td className="py-2 px-3 font-medium">{row.size}</td>
                      <td className="py-2 px-3">{row.chest}</td>
                      <td className="py-2 px-3">{row.waist}</td>
                      <td className="py-2 px-3">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="mt-4 text-xs text-gray-500">
                <p>How to measure:</p>
                <ul className="list-disc list-inside mt-1">
                  <li>Chest: Measure around the fullest part of your chest</li>
                  <li>Waist: Measure around your natural waistline</li>
                  <li>Hips: Measure around the fullest part of your hips</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 border-t flex justify-end">
              <button
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SizeChartModal;