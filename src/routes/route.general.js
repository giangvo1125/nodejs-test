import { general } from '../controllers'

export default app => {
    app.post('/api/rotate-picture', general.rotatePicture)
    app.post('/api/hotel-booking', general.hotelBooking)
}