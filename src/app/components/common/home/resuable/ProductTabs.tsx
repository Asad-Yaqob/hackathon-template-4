'use client'

interface TabProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function ProductTabs({ tabs, activeTab, onTabChange }: TabProps) {
  return (
    <div className="flex justify-center gap-8 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`text-[18px] font-josefin ${
            activeTab === tab
              ? 'text-[#FB2E86] border-b-2 border-[#FB2E86]'
              : 'text-[#151875]'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}