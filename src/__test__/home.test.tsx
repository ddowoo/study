import { createMemoryRouter } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import Home from "../components/pages/home";
import { QueryClient, QueryClientProvider } from "react-query";
import PageLayout from "../components/blocks/pageLayout";
import Quiz from "../components/pages/quiz";

const queryClient = new QueryClient();

describe("홈 컴포넌트 테스트", () => {
  beforeEach(() => {
    // Given : 퀴즈 조건 선택 화면 렌더링
    const routes = [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
      initialIndex: 0,
    });
    render(
      <QueryClientProvider client={queryClient}>
        <PageLayout>
          <RouterProvider router={router} />
        </PageLayout>
      </QueryClientProvider>
    );
  });

  it("퀴즈 조건 선택 후 퀴즈 시작버튼 활성화", () => {
    //When,Act - 퀴즈 갯수와 난이도 설정
    const countRadioBtn = screen.getByLabelText("5개");
    const levelRadioBtn = screen.getByLabelText("medium");

    fireEvent.click(countRadioBtn);
    fireEvent.click(levelRadioBtn);

    //Then,Asser - 퀴즈 풀기 버튼이 활성화
    const quizBtn = screen.getByText("퀴즈풀기");
    expect(quizBtn).toHaveProperty("disabled", false);
  });

  it("퀴즈 풀기 클릭 시 Quiz로 이동", () => {
    //When,Act - 퀴즈풀기 버튼을 눌러 퀴즈 페이지로 넘어가기
    const countRadioBtn = screen.getByLabelText("5개");
    const levelRadioBtn = screen.getByLabelText("medium");
    const quizBtn = screen.getByText("퀴즈풀기");
    const quzBtn = screen.getByText("fw");

    fireEvent.click(countRadioBtn);
    fireEvent.click(levelRadioBtn);
    fireEvent.click(quizBtn);

    //Then,Asser - 퀴즈페이지
    expect(screen.getByText("제출하기")).toBeInTheDocument();
  });
});
