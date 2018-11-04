import axios from 'axios'

const FLASK_PORT = 8080

export const getCaseList = (): Promise =>
  axios
    .get(`localhost:${FLASK_PORT}/api/v1/cases`, {
      headers: {
    	  'Access-Control-Allow-Origin': '*',
    	},
    })
    .then(res => res.data);

export const getCaseDetails = (patientId): Promise =>
  axios
    .get(`localhost:${FLASK_PORT}/api/v1/cases/${patientId}`)
    .then(res => res.data)

export const postDiagnosis = (patientId, diagnosis): Promise =>
  axios
    .post(`localhost:${FLASK_PORT}/api/v1/cases/${patientId}/diagnosis`, diagnosis)
    .then(res => res.data);
