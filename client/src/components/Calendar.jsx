export const Calendar = () => {
  return (
    <div className="snap-mandatory snap-x grid grid-cols-3 align-middle gap-8 h-full min-w-[1465px] lg:min-w-0">
      <div className="snap-center hover:snap-x touch-pan-x shrink-0 snap-always flex justify-center items-center bg-[--global-color-dark-light-bg] rounded-md">
        past
      </div>
      <div className="snap-center hover:snap-x touch-pan-x shrink-0 snap-always flex justify-center items-center bg-[--global-color-dark-accent] rounded-md">
        current
      </div>
      <div className="snap-center hover:snap-x touch-pan-x shrink-0 snap-always flex justify-center items-center bg-[--global-color-dark-light-bg] rounded-md">
        future
      </div>
    </div>
  );
};
