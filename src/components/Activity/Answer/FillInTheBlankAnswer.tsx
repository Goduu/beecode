import { highlightCode, Token } from '@/components/token_colors/highlightCode'
import { FillInTheBlankQuestion, Segment } from '@contentlayer/generated'
import React, { FC } from 'react'
import { AnswerStatus } from '../types'
import { TokenChip } from '../TokenChip'
import { useAnswerStates } from './useAnswerStates'
import { CheckContinueButton } from './CheckContinueButton'
import { QuestionDescription } from './QuestionDescription'
import { TokenText } from '../TokenText'

type FillInTheBlankQuestionProps = {
    question: FillInTheBlankQuestion
    language: string
    handleGoToNextActivity: () => void
}

export const FillInTheBlankAnswer: FC<FillInTheBlankQuestionProps> = ({ question, language, handleGoToNextActivity }) => {
    const {
        status,
        options,
        answer,
        handleCheckStatus,
        removeTokenFromAnswer,
        addTokenToAnswer,
    } = useAnswerStates(question, language)
    const segments = question.segments;
    if (!segments) return null;

    const statusClass = getStatusClass(status);
    let gapCounter = -1;
    return (
        <div className='flex flex-col gap-16 px-2'>
            <QuestionDescription description={question.description} />
            <div className={`flex rounded-xl border-2 min-w-96 min-h-40 justify-center items-center drop-shadow-xl ${statusClass}`}>
                <div className='flex justify-start text-left'>
                    <div>
                        {segments.map((segment) => {
                            if (segment.sType === 'code') {
                                return renderCodeSegment(segment, language);
                            }
                            if (segment.sType === 'text') {
                                return renderTextSegment(segment);
                            }
                            gapCounter++;
                            return renderGapSegment(answer, gapCounter, segment, removeTokenFromAnswer);
                        })}
                    </div>
                </div>
            </div>
            <div className='flex gap-4 justify-center flex-wrap' >
                {options.map((token) => (
                    <TokenChip key={`token-option-${token.content}`} onClick={() => addTokenToAnswer(token)} token={token} className='px-2'
                    />
                ))}
            </div>
            <CheckContinueButton status={status} handleCheck={handleCheckStatus} handleGoToNextActivity={handleGoToNextActivity} />
        </div>
    );
}

const renderCodeSegment = (segment: Segment, language: string) => {
    const tokenizedCode = highlightCode(segment.content, language);
    return (
        < >
            {tokenizedCode.map((token, i) => (
                <TokenText key={`text-segment-${segment._id}`} token={token} />
            ))}
        </>
    );
}

const renderTextSegment = (segment: Segment) => {
    console.log("render text segment");
    return (
        <span className='text-xl font-extrabold flex-wrap'>
            {segment.content}
        </span>
    );
}

const renderGapSegment = (tokens: Token[], gapCounter: number, segment: Segment, removeToken: (token: Token) => void) => {
    return (
        <span key={`gap-${segment._id}`} className="relative inline-block">
            {tokens?.[gapCounter] && (
                <span className="absolute inset-0 flex justify-center items-center">
                    <TokenChip onClick={() => removeToken(tokens[gapCounter])} token={tokens[gapCounter]} />
                </span>
            )}
            <TokenChip token={{ type: "gap", content: segment.content }} />
        </span>
    );
}

const getStatusClass = (status: AnswerStatus): string => {
    switch (status) {
        case 'correct':
            return 'border-green-500';
        case 'wrong':
            return 'border-red-600';
        default:
            return 'border-gray-500';
    }
}