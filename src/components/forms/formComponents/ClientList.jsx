import ObtainData from 'services/getDB/obtainData'

import { Field } from 'formik'

const ClientsList = () => {
  const [jobs] = ObtainData('Clients')
  return (
    <Field
      className='form-select-client'
      type='client'
      as='select'
      name='client'
    >
      <option value='operario' default>Clientes</option>
      {
        jobs.map((res, index) => (
          <option key={index} value={res.client}>{res.client}</option>
        ))
      }
    </Field>
  )
}

export default ClientsList
