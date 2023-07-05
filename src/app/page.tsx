import { useSession } from "next-auth/react";
import TripSearch from "./components/TripsSearch";
import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendedTrips";

export default function Home() {
  // const { data: session } = useSession();

  // console.log(session);

  return (
    <div>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}
