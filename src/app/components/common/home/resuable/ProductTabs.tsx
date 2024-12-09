interface TabProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function ProductTabs({ tabs, activeTab, onTabChange }: TabProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-8 px-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`text-base md:text-lg font-josefin transition-colors duration-200 pb-1 ${
            activeTab === tab
              ? "text-[#FB2E86] border-b-2 border-[#FB2E86]"
              : "text-[#151875] hover:text-[#FB2E86]"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
