const Card1 = (props) => {
    return (
      <>
        <div class="flex flex-col justify-center align-middle gap-3 py-7 px-8 w-72 bg-[#9993] rounded-md">
          <div class="self-center">
            <p class="text-4xl">{props.icon}</p>
          </div>
          <div class="self-center">
            <p class="text-xl font-medium">{props.label}</p>
          </div>
          <div class="self-center">
            <p class="text-xl font-semibold">{props.detail}</p>
          </div>
        </div>
      </>
    );
  };

  

  export default Card1;
