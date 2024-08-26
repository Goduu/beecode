import React, { FC } from "react"
import { MultipleChoiceQuestion } from "@contentlayer/generated"
import { useMultipleChoiceAnswerStates } from "./MultipleChoiceAnswer.states"
import { TokenGroupChip } from "../TokenGroupChip"
import { OptionWithTokens } from "@/components/TokenColors/highlightCode"

type MultipleChoiceAnswerProps = {
  question: MultipleChoiceQuestion
  language: string
  setLessonState: (state: "none" | "correct" | "wrong" | "completed") => void
}

export const MultipleChoiceAnswer: FC<MultipleChoiceAnswerProps> = ({ question, language, setLessonState }) => {
  const { status, options, answer, addTokenToAnswer, removeOptionFromAnswer } = useMultipleChoiceAnswerStates(
    question,
    language,
    setLessonState,
  )

  const statusClass =
    status === "correct" ? "border-lime-500" : status === "wrong" ? "border-red-600" : "border-gray-500"

  return (
    <div className="flex flex-col items-center gap-10 sm:gap-16">
      <div className="flex min-h-40 w-full gap-2">
        <div className={`flex w-full flex-col justify-center rounded-xl border-2 drop-shadow-xl ${statusClass}`}>
          <div className="inline-block px-1 text-start">
            {answer.map((optionWithToken, index) => (
              <TokenGroupChip
                id="answer"
                key={`answer-${optionWithToken.id}`}
                onClick={() => removeOptionFromAnswer(optionWithToken)}
                optionWithToken={optionWithToken}
                className="px-2"
              />
            ))}
          </div>
        </div>
        <div className="flex w-1/6 flex-col gap-1">
          <span
            className="cursor-pointer items-center rounded-3xl border text-center"
            onClick={() => addTokenToAnswer(createFormattingToken("\t"))}
          >
            Tab
          </span>
          <span
            className="cursor-pointer items-center rounded-3xl border text-center"
            onClick={() => addTokenToAnswer(createFormattingToken("\n"))}
          >
            Enter
          </span>
          <span
            className="cursor-pointer items-center rounded-3xl border text-center"
            onClick={() => addTokenToAnswer(createFormattingToken(" "))}
          >
            Space
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {options.map((option) => (
          <TokenGroupChip
            id="option"
            key={option.id}
            optionWithToken={option}
            onClick={() => addTokenToAnswer(option)}
            className="px-2"
          />
        ))}
      </div>
    </div>
  )
}

const createFormattingToken = (content: string): OptionWithTokens => {
  return {
    id: content === "\t" ? "ft" : content === "\n" ? "fn" : "fs",
    content: content,
    type: "TextOption",
    tokens: [{ content, type: "format" }],
  }
}
