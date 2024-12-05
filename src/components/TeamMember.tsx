import React from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedIn?: string;
  bio: string;
}

export default function TeamMember({ name, role, image, linkedIn, bio }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          className="w-32 h-32 rounded-full object-cover"
          src={image}
          alt={name}
        />
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="h-4 w-4 text-white" />
          </a>
        )}
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
      <p className="text-sm text-blue-600">{role}</p>
      <p className="mt-2 text-sm text-gray-500 text-center max-w-md">{bio}</p>
    </div>
  );
}