import GetDB from 'services/getDB/getDB'

const ObtainData = (jobDb) => {
  const [job, loading] = GetDB(jobDb)
  const jobs = []
  job.forEach(res => {
    jobs.push({ ...res.data(), id: res.id })
  })
  return [jobs, loading]
}
export default ObtainData
