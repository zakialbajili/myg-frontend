import axios from '@/axios/axiosConfig';

//path: src/lib/mya/productService.ts
// Gunanya untuk mengambil data produk dari API


const API_URL =  process.env.NEXT_PUBLIC_BASE_API + '/myg/api/testimonials/';

class TestimonyService {
  static async fetchTestimonies({ limit = 10 }) {
    try {
      const response = await axios.get(API_URL, { params: { limit } });
      // console.log(response.data.meta.message);
      return response.data.meta.message;
    } catch (error) {
      console.error("Error fetching testimonies", error);
      return null;
    }
  }

  static async fetchTestimonyById(id: number) {
    try {
      const response = await axios.get(`${API_URL}${id}/`);
      return response.data.meta.message;
    } catch (error) {
      console.error("Error fetching testimony by id", error);
      return null;
    }
  }

  // postTestimony
  static async postTestimony( { name, email, role, comment } : { name: string, email: string, role: string, comment: string }) {
    try {
      const payload = { name, email, role, comment };
      const response = await axios.post(API_URL, payload);
      return response.data.meta.message;
    } catch (error) {
      console.error("Error posting testimony", error);
      return null;
    }
  }
}

export default TestimonyService;
