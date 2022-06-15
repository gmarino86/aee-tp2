import { useAuth } from '../context/Auth.Context';

function Logout() {
    const auth = useAuth()
    auth.logout()
}

export default Logout