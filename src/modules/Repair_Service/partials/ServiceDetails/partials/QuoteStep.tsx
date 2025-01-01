import QuoteInfo from '@components/QuoteInfo/QuoteInfo';
import React from 'react';
import { QuoteStepProps } from '../config/types';

const QuoteStep: React.FC<QuoteStepProps> = ({
  deliveryMethod,
  setDeliveryMethod,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  message,
  setMessage,
  issue,
  selectedLocation,
  service,
  setError,
  error,
  setStep,
}) => {
  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    setStep(5);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 bg-gray-50 p-8">
      {/* Left Form Section */}
      <form
        onSubmit={handleSubmitQuote}
        className="bg-blue-50 rounded-lg p-8 shadow-lg flex-1 space-y-6"
      >
        <h2 className="text-xl font-bold text-center mb-4">
          How do you want your quote delivered? (Optional)
        </h2>
        <div className="flex justify-around mb-6">
          {['SMS text (Instant)', 'Email (Instant)', 'Phone call'].map(
            method => (
              <label
                key={method}
                className={`flex flex-col items-center cursor-pointer ${
                  deliveryMethod === method ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                <input
                  type="radio"
                  name="delivery"
                  value={method}
                  onChange={e => setDeliveryMethod(e.target.value)}
                  className="hidden"
                />
                <span
                  className={`border-2 ${
                    deliveryMethod === method
                      ? 'border-blue-600 bg-blue-100'
                      : 'border-gray-300'
                  } rounded-full w-8 h-8 flex items-center justify-center`}
                ></span>
                <span className="mt-2 text-sm">{method}</span>
              </label>
            )
          )}
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex flex-wrap gap-4">
            <select
              className="w-full sm:w-auto rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
              defaultValue="+880"
            >
              <option value="+880">+880</option>
              <option value="+990">+990</option>
            </select>
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="flex-1 w-full rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <textarea
            placeholder="Message (Optional)"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="text-center">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-3 transition-colors"
          >
            Send me the quote
          </button>
        </div>
      </form>

      {/* Right Info Section */}
      <QuoteInfo
        service={service}
        issue={issue}
        selectedLocation={selectedLocation}
      />
    </div>
  );
};

export default QuoteStep;
