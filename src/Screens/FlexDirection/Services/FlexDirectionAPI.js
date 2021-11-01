import { Api } from '@/Api'

export default async () => {
  const response = await Api.get(`flexDirection`)
  return response.data
}
