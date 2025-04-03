import Stat, { StatProps } from './Stat';

type StatsSectionProps = {
    stats: StatProps[]
}
const StatsSection = ({stats}: StatsSectionProps) => {
  return (
    <div style={{ "display": "flex",
        "justifyContent": "space-around",
        "alignItems": "center",
        "padding": "20px"}}>
      {stats?.map((stat, index) => {
        return <Stat key={index} value={stat.value} title={stat.title} />
      })}
    </div>
  );
};

export default StatsSection;