import PropTypes from "prop-types"; // Import PropTypes
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "../dashboard/Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1.
  const numBookings = bookings.length;

  //2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //3.
  const checkins = confirmedStays.length;

  //4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Checked-ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

// Define prop types for the Stats component
Stats.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      totalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  confirmedStays: PropTypes.arrayOf(
    PropTypes.shape({
      numNights: PropTypes.number.isRequired,
    })
  ).isRequired,
  numDays: PropTypes.number.isRequired,
  cabinCount: PropTypes.number.isRequired,
};

export default Stats;
