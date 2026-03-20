import classes from "./Tabs.module.css";
import clsx from "clsx";
interface TabsProps {
  className?: string;
  tabs: string[];
  activeTab: string;
  setActiveTab: (string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  className,
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className={clsx(classes.tabs, className)}>
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActiveTab(tab)}
          className={clsx(classes.tab, activeTab === tab && classes.active)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
export default Tabs;
