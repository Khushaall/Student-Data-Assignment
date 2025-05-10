import { useEffect, useState } from 'react';
import axios from '../api/mockapi';
import type { Student } from '../api/mockapi';

export default function useContent() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh(); 
  }, []);

  return { students, loading, refresh };
}
