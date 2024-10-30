import styled from "styled-components";

// import Heading from "ui/Heading";
import Heading from "../../ui/Heading";
// import Row from "ui/Row";
import Row from "../../ui/Row";
import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "../dashboard/TodayItem";

const StyledToday = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();
  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading type="h2">Today</Heading>
      </Row>
      {!isLoading ? (
        activities?.length > 0 ? (
          <TodayList>
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No activity today...</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default TodayActivity;

const OLDdata = [
  {
    id: 1,
    status: "unconfirmed",
    guests: { fullName: "Jonas Schmedtmann" },
    numNights: 6,
  },
  {
    id: 2,
    status: "unconfirmed",
    guests: { fullName: "Steven Miller" },
    numNights: 1,
  },
  {
    id: 3,
    status: "checked-in",
    guests: { fullName: "John Smith" },
    numNights: 3,
  },
  {
    id: 4,
    status: "unconfirmed",
    guests: { fullName: "Marta Schmedtmann" },
    numNights: 14,
  },
  {
    id: 5,
    status: "checked-in",
    guests: { fullName: "Miguel Silva" },
    numNights: 5,
  },
  {
    id: 6,
    status: "checked-in",
    guests: { fullName: "Mary Williams" },
    numNights: 4,
  },
];
