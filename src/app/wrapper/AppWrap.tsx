import { ComponentType } from 'react';

const AppWrap = (Component: ComponentType, idName: string, classNames: string) => function HOC() {
  return (
    <div id={idName} className={`${classNames} sm:py-28 py-24 xl:py-0`}>
      <div className="max-w-[1440px] mx-auto px-8 min-[387px]:px-12">
        <Component />
      </div>
    </div>
  );
}

export default AppWrap