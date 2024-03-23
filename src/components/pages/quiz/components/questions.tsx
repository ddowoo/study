import { Dispatch, SetStateAction } from "react";
import { useRecoilValue } from "recoil";
import { useQuiz } from "../../../../hooks/queries/useQuiz";
import { quizConfigState } from "../../../../atoms/quiz";
import { useSearchParams } from "react-router-dom";

type Props = {
  isSolving: boolean;
  nowSolvingIndex: number;
  setIsSolving: Dispatch<SetStateAction<boolean>>;
};

const Questions = () => {
  const { count, level } = useRecoilValue(quizConfigState);
  const { data: questionList } = useQuiz(count, level);

  const [searchParams] = useSearchParams();
  const idx = searchParams.get("idx") ?? "0";
  console.log(questionList);
  console.log("idx : ", idx);
  const quiz = questionList && questionList[parseInt(idx)];

  return (
    <div className="text-wrap">
      <p>{`${idx + 1}. ${quiz?.question}`}</p>
      {quiz?.optionList.map((option, index) => {
        return (
          <p key={`quiz_option_${option}`} className="my-2 cursor-pointer">
            {index + 1}. {option}
          </p>
        );
      })}
    </div>
  );
};

export default Questions;
