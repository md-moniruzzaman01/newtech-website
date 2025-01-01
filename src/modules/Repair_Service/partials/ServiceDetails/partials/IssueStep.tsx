import React, { useState, useEffect } from 'react';
import { IssueStepProps } from '../config/types';
import Image from 'next/image';

const IssueStep: React.FC<IssueStepProps> = ({
  issue,
  setIssue,
  setStep,
  setError = () => {},
  error = '',
}) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const savedIssue = localStorage.getItem('issue');
    const savedImages = JSON.parse(localStorage.getItem('images') || '[]');
    const savedStep = localStorage.getItem('currentStep');

    if (savedIssue) setIssue(savedIssue);
    if (savedImages.length > 0) setImages(savedImages);

    if (savedStep && parseInt(savedStep) === 2) {
      setStep(2);
    }
  }, [setIssue, setStep]);

  useEffect(() => {
    localStorage.setItem('issue', issue || '');
    localStorage.setItem('images', JSON.stringify(images));
    localStorage.setItem('currentStep', '2');
  }, [issue, images]);

  const handleSubmitIssue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!issue.trim()) {
      setError('Please describe the issue before proceeding.');
      return;
    }
    setError('');
    localStorage.setItem('currentStep', '3');
    setStep(3);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageUrls = files.map(file => URL.createObjectURL(file));
      setImages(prevImages => [...prevImages, ...imageUrls]);
    }
  };

  const handleRemoveImage = (imageUrl: string) => {
    setImages(prevImages => prevImages.filter(image => image !== imageUrl));
  };

  return (
    <form
      onSubmit={handleSubmitIssue}
      className="bg-blue-50 rounded-lg mt-10 p-8 w-11/12 sm:w-2/3 lg:w-1/2 mx-auto"
    >
      <h2 className="font-semibold mb-4">Describe Your Issue</h2>

      <textarea
        value={issue}
        onChange={e => setIssue(e.target.value)}
        placeholder="Enter the issue you're facing with the device..."
        className="w-full rounded-lg p-3 mb-4 focus:outline-blue-500"
        autoFocus
      ></textarea>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Image upload section */}
      <div className="mb-4 font-semibold">
        <label htmlFor="image-upload" className="block text-gray-700 mb-2">
          Upload images of the issue (optional)
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="border border-slate-300 rounded-lg p-2 w-full"
        />
        {images.length > 0 && (
          <div className="mt-4">
            <h3 className="text-gray-700 text-sm mb-2">Image Previews:</h3>
            <div className="flex flex-wrap">
              {images.map((imageUrl, index) => (
                <div key={index} className="relative mr-4 mb-4">
                  <Image
                    src={imageUrl}
                    alt={`Uploaded preview ${index + 1}`}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(imageUrl)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
      >
        Submit Issue
      </button>
    </form>
  );
};

export default IssueStep;
