import { Text, Fade } from "animation-react";

const Animation = () => {
  return (
    <>
      <Fade type={"left"} isRepeat={true}>
        <Text
          value="안녕하세요! 저는 서재완입니다."
          isRepeat
          type={"opacity"}
        />
      </Fade>
      <div>
        <Text
          value="안녕하세요! 저는 서재완입니다."
          isRepeat
          type={"underline"}
        />
      </div>
      <div>
        <Text value="안녕하세요! 저는 서재완입니다." isRepeat type={"drop"} />
      </div>
      <div>
        <Text
          value="안녕하세요! 저는 서재완입니다."
          isRepeat
          type={"slide"}
          option={{ translate: "translateX(100px)" }}
        />
      </div>
    </>
  );
};

export default Animation;
