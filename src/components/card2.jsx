const Card2 = (props) => {
    return (
      <>
        <div class="flex flex-col justify-center align-middle gap-2 text-center py-7 px-4 mt-10 w-72 h-72 border border-violet-500 rounded-md">
          <div class="self-center">
            <img src={props.img} class="-mt-14 w-full rounded-md"></img>
          </div>
          <div class="self-center">
            <p class="text-xl font-medium">{props.label}</p>
          </div>
          <div class="self-center">
            <p class="text-lg font-semibold">{props.detail}</p>
          </div>
          <div class="self-center">
            <p class="text-sm font-semibold">{props.host}</p>
          </div>
        </div>
      </>
    );
  };

  export default Card2;