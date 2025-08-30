'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QuizQuestion {
  id: number
  question: string
  answers: {
    text: string
    type: 'butterfly' | 'whisperer' | 'jester'
    points: number
  }[]
}

interface PersonalityResult {
  type: 'butterfly' | 'whisperer' | 'jester'
  title: string
  description: string
  strengths: string[]
  tips: string[]
  famousExample: string
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "You arrive at a networking event. What's your first move?",
    answers: [
      { text: "Head straight to the center of the room and start introducing myself", type: 'butterfly', points: 3 },
      { text: "Find someone standing alone and strike up a conversation", type: 'whisperer', points: 3 },
      { text: "Make a beeline for the bar and crack a joke with whoever's there", type: 'jester', points: 3 }
    ]
  },
  {
    id: 2,
    question: "Your ideal conversation starter is:",
    answers: [
      { text: "Hi! I'm [name] from [company]. Tell me about your role!", type: 'butterfly', points: 3 },
      { text: "I noticed you were checking out the speaker list. Any sessions you're excited about?", type: 'whisperer', points: 3 },
      { text: "Is it just me, or does the networking part feel like speed dating for professionals?", type: 'jester', points: 3 }
    ]
  },
  {
    id: 3,
    question: "You notice someone looking uncomfortable at the event. You:",
    answers: [
      { text: "Wave them over to join your group conversation", type: 'butterfly', points: 2 },
      { text: "Approach them one-on-one and ask about their work", type: 'whisperer', points: 3 },
      { text: "Break the ice with a self-deprecating comment about networking anxiety", type: 'jester', points: 2 }
    ]
  },
  {
    id: 4,
    question: "Your business card exchange style is:",
    answers: [
      { text: "I hand them out enthusiastically to everyone I meet", type: 'butterfly', points: 3 },
      { text: "I wait for the right moment when there's genuine connection", type: 'whisperer', points: 3 },
      { text: "I joke about how we'll probably lose each other's cards anyway", type: 'jester', points: 3 }
    ]
  },
  {
    id: 5,
    question: "The conversation is dying. Your rescue move?",
    answers: [
      { text: "Introduce them to someone else I just met", type: 'butterfly', points: 3 },
      { text: "Ask a thoughtful follow-up question about something they mentioned", type: 'whisperer', points: 3 },
      { text: "Make a funny observation about the event or venue", type: 'jester', points: 3 }
    ]
  },
  {
    id: 6,
    question: "Your follow-up strategy after the event:",
    answers: [
      { text: "Connect with everyone on LinkedIn within 24 hours", type: 'butterfly', points: 3 },
      { text: "Send personalized messages to the few meaningful connections", type: 'whisperer', points: 3 },
      { text: "Reference an inside joke from our conversation in my follow-up", type: 'jester', points: 3 }
    ]
  },
  {
    id: 7,
    question: "Your networking superpower is:",
    answers: [
      { text: "Working the entire room and remembering everyone's name", type: 'butterfly', points: 3 },
      { text: "Making shy people feel comfortable and included", type: 'whisperer', points: 3 },
      { text: "Turning awkward moments into memorable laughs", type: 'jester', points: 3 }
    ]
  }
]

const personalityResults: Record<'butterfly' | 'whisperer' | 'jester', PersonalityResult> = {
  butterfly: {
    type: 'butterfly',
    title: 'The Social Butterfly',
    description: "You're a natural networker who thrives in social settings. Your energy is contagious, and you have a gift for making connections quickly. You can work a room like a pro and aren't afraid to put yourself out there.",
    strengths: [
      'Natural charisma and confidence',
      'Ability to remember names and faces',
      'Skilled at group conversations',
      'High energy that draws people in'
    ],
    tips: [
      'Focus on quality over quantity - deeper connections matter',
      'Take breaks to recharge and avoid burnout',
      'Practice active listening to balance your enthusiasm',
      'Follow up meaningfully, not just broadly'
    ],
    famousExample: 'Think Oprah Winfrey or Gary Vaynerchuk - masters of working a room'
  },
  whisperer: {
    type: 'whisperer',
    title: 'The Wallflower Whisperer',
    description: "You have a special talent for connecting with quieter individuals and creating meaningful one-on-one conversations. Your empathetic approach makes others feel seen and heard, building trust quickly.",
    strengths: [
      'Exceptional listening skills',
      'Ability to make others feel comfortable',
      'Creates deep, meaningful connections',
      'Picks up on social cues others miss'
    ],
    tips: [
      'Don\'t neglect group networking opportunities',
      'Push yourself to initiate more conversations',
      'Share more about yourself to balance the exchange',
      'Leverage your strength in smaller, intimate events'
    ],
    famousExample: 'Like Mr. Rogers or Brené Brown - creating safe spaces for connection'
  },
  jester: {
    type: 'jester',
    title: 'The Jester',
    description: "You're the person who makes networking fun! Your humor breaks down barriers and helps everyone relax. You have a gift for turning potentially awkward situations into memorable moments that people actually enjoy.",
    strengths: [
      'Natural ice-breaker abilities',
      'Makes events enjoyable for everyone',
      'Memorable first impressions',
      'Defuses tension with ease'
    ],
    tips: [
      'Balance humor with professional substance',
      'Read the room - not every moment needs a joke',
      'Ensure your humor is inclusive and appropriate',
      'Don\'t forget to share your professional value too'
    ],
    famousExample: 'Channel your inner Ellen DeGeneres or Trevor Noah - professionally funny'
  }
}

export function NetworkingPersonalityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Array<{ type: 'butterfly' | 'whisperer' | 'jester'; points: number }>>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<PersonalityResult | null>(null)

  const handleAnswer = (type: 'butterfly' | 'whisperer' | 'jester', points: number) => {
    const newAnswers = [...answers, { type, points }]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (allAnswers: Array<{ type: 'butterfly' | 'whisperer' | 'jester'; points: number }>) => {
    const scores = {
      butterfly: 0,
      whisperer: 0,
      jester: 0
    }

    allAnswers.forEach(answer => {
      scores[answer.type] += answer.points
    })

    const winner = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
    )[0] as 'butterfly' | 'whisperer' | 'jester'

    setResult(personalityResults[winner])
    setShowResult(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setResult(null)
  }

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Discover Your Networking Personality
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Take this quick quiz to find out if you're a Social Butterfly, Wallflower Whisperer, or Jester!
        </p>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Question */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-sm text-gray-500 mb-2">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].answers.map((answer, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(answer.type, answer.points)}
                      className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                    >
                      <span className="text-gray-700">{answer.text}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <div className="text-center mb-6">
                <div className="text-blue-500 text-5xl mb-4">
                  {result.type === 'butterfly' && '🦋'}
                  {result.type === 'whisperer' && '🤝'}
                  {result.type === 'jester' && '🎭'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  You're {result.title}!
                </h3>
                <p className="text-gray-600">
                  {result.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Your Strengths:</h4>
                  <ul className="space-y-2">
                    {result.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Pro Tips:</h4>
                  <ul className="space-y-2">
                    {result.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">→</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Famous Example:</span> {result.famousExample}
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Take Quiz Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}