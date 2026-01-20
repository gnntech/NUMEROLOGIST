import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GetInTouchSection: React.FC = () => {
  const [formData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: ''
  });

  // Suppress unused variable warning
  void formData;

  return (
    <motion.div 
      
    >
    
    </motion.div>
  );
};

export default GetInTouchSection;
