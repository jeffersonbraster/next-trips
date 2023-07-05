import { prisma } from "@/lib/prisma";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";

const getTripDetails = async (id: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id,
    },
  });

  return trip;
};

const TripsDetails = async ({ params }: { params: { id: string } }) => {
  const trip = await getTripDetails(params.id);

  if (!trip) {
    return <div>404</div>;
  }

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation trip={trip} />
      <TripDescription description={trip.description} />
    </div>
  );
};

export default TripsDetails;
