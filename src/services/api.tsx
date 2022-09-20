import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL ?? 'https://jsonplaceholder.typicode.com';

interface Form {
  doc: string;
  numPlate: string;
  phone: string;
}

const submit = async ({ doc, numPlate, phone }: Form) => {
  const carInfo = { doc, numPlate, phone };
  const options = {
    method: 'POST',
    url: `${apiUrl}/posts`,
    data: { carInfo }
  };
  return axios.request(options);
};

export default submit;
