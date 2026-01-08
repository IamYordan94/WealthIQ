// Curriculum data structure for WealthIQ
export const curriculum = [
    {
        id: 'money-basics',
        title: 'Money Basics',
        icon: '💰',
        description: 'Budgeting, saving & emergency funds',
        color: '#10b981',
        isPremium: false,
        lessons: [
            {
                id: 1,
                title: 'The 50/30/20 Budget Rule',
                duration: '4 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'The 50/30/20 rule is a simple budgeting framework that helps you manage your money effectively.',
                        },
                        {
                            type: 'list',
                            title: 'How It Works',
                            items: [
                                '50% Needs: Rent, utilities, groceries, insurance',
                                '30% Wants: Entertainment, dining out, hobbies',
                                '20% Savings: Emergency fund, investments, debt payoff',
                                'Adjust percentages based on your situation',
                            ],
                        },
                    ],
                    quiz: {
                        question: "What percentage should go to 'Needs'?",
                        options: ["20%", "30%", "50%", "10%"],
                        correctIndex: 2,
                        explanation: "The rule recommends 50% for Needs, 30% for Wants, and 20% for Savings."
                    }
                },
            },
            {
                id: 2,
                title: 'Building Your Emergency Fund',
                duration: '5 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'An emergency fund protects you from unexpected expenses and financial stress.',
                        },
                        {
                            type: 'list',
                            title: 'Getting Started',
                            items: [
                                'Start with €1,000 as your initial goal',
                                'Build up to 3-6 months of expenses',
                                'Keep it in a high-yield savings account',
                                'Only use for true emergencies',
                                'Replenish immediately after using it',
                            ],
                        },
                    ],
                    quiz: {
                        question: "How many months of expenses should a full emergency fund cover?",
                        options: ["1 month", "3-6 months", "12 months", "24 months"],
                        correctIndex: 1,
                        explanation: "Financial experts generally recommend having 3 to 6 months of basic living expenses saved in an emergency fund."
                    }
                },
            },
            {
                id: 3,
                title: 'Income vs. Expenses',
                duration: '5 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Mastering your cash flow is the foundation of wealth. You must know exactly what comes in and what goes out.',
                        },
                        {
                            type: 'list',
                            title: 'Cash Flow Basics',
                            items: [
                                'Gross Income: What you earn before taxes',
                                'Net Income: What actually hits your bank account',
                                'Fixed Expenses: Rent, insurance, car payments',
                                'Variable Expenses: Groceries, gas, entertainment',
                                'The Gap: Net Income minus Total Expenses',
                            ],
                        },
                    ],
                },
            },
            {
                id: 4,
                title: 'Emergency Funds 101',
                duration: '6 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Deep dive into why an emergency fund is your "financial seatbelt".',
                        },
                        {
                            type: 'list',
                            title: 'Where to Keep It',
                            items: [
                                'Accessibility: Must be reachable in 24-48 hours',
                                'Safety: Must be in a regulated bank (not under mattress)',
                                'Growth: Use a High-Yield Savings Account (HYSA)',
                                'Psychology: Keep it separate from your spending account',
                                'Definition: Car repair = Emergency. New Shoes = Not Emergency.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 5,
                title: 'Tracking Your Spending',
                duration: '5 min',
                type: 'lesson',
                releaseDate: '2026-02-01',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Knowing where every euro goes is the only way to find "hidden" savings.',
                        },
                        {
                            type: 'list',
                            title: 'Methods to Track',
                            items: [
                                'The App Method: Automated syncing (easy)',
                                'The Spreadsheet: Manual entry (high awareness)',
                                'The Envelope System: Cash only for variable spending',
                                'Daily Check-in: 2 minutes every morning',
                                'Monthly Review: Categorize and compare to budget',
                            ],
                        },
                    ],
                },
            },
        ],
    },
    {
        id: 'banking-credit',
        title: 'Banking & Credit',
        icon: '🏦',
        description: 'Bank accounts & credit scores',
        color: '#3b82f6',
        isPremium: false,
        lessons: [
            {
                id: 1,
                title: 'Understanding Credit Scores',
                duration: '6 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Your credit score affects loan rates, apartment rentals, and even job opportunities.',
                        },
                        {
                            type: 'list',
                            title: 'What Affects Your Score',
                            items: [
                                'Payment history (35%): Pay bills on time',
                                'Credit utilization (30%): Keep below 30%',
                                'Credit age (15%): Keep old accounts open',
                                'New credit (10%): Don\'t apply too often',
                                'Credit mix (10%): Different types of credit',
                            ],
                        },
                    ],
                },
            },
            {
                id: 2,
                title: 'Choosing a Bank',
                duration: '5 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Where you store your money matters more than you think. Fees can eat your wealth.',
                        },
                        {
                            type: 'list',
                            title: 'What to Look For',
                            items: [
                                'Maintenance Fees: Avoid "pay to play" accounts',
                                'ATM Access: Network size and fee reimbursement',
                                'Interest Rates: APY on savings (look for >4%)',
                                'Mobile App Quality: Can you do everything remotely?',
                                'Customer Support: Human support when things go wrong',
                            ],
                        },
                    ],
                },
            },
            {
                id: 3,
                title: 'Credit Cards Explained',
                duration: '7 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Credit cards are tools. If used correctly, they are powerful; if not, they are dangerous.',
                        },
                        {
                            type: 'list',
                            title: 'Pro Rules for Credit Cards',
                            items: [
                                'Pay in full every month. No exceptions.',
                                'Never use for money you don\'t have.',
                                'Leverage rewards (cashback/travel).',
                                'Monitor transactions for fraud daily.',
                                'Keep utilization low (1-10% is ideal).',
                            ],
                        },
                    ],
                },
            },
            {
                id: 4,
                title: 'Debit vs. Credit Cards',
                duration: '5 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Debit is your money; Credit is the bank\'s money. Understanding the difference is vital for safety.',
                        },
                        {
                            type: 'list',
                            title: 'The Comparison',
                            items: [
                                'Fraud Protection: Credit is much safer online.',
                                'Credit Building: Debit does not affect your score.',
                                'Spending Control: Debit stops when you hit zero.',
                                'Holds: Hotels/Cars usually require credit.',
                                'Fees: Debit usually has fewer annual fees.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 5,
                title: 'Building Credit from Scratch',
                duration: '6 min',
                type: 'lesson',
                releaseDate: '2026-03-01',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Starting from zero? Here is how to create a perfect credit profile starting today.',
                        },
                        {
                            type: 'list',
                            title: 'Step-by-Step Build',
                            items: [
                                'Become an Authorized User on a family member\'s card.',
                                'Get a Secured Credit Card (deposit = limit).',
                                'Use it for ONE small subscription only.',
                                'Wait 6-12 months for a score to generate.',
                                'Apply for your first independent "no fee" card.',
                            ],
                        },
                    ],
                },
            },
        ],
    },
    {
        id: 'investing-101',
        title: 'Investing 101',
        icon: '📈',
        description: 'Stocks, bonds & index funds',
        color: '#a855f7',
        isPremium: false,
        lessons: [
            {
                id: 1,
                title: 'Why Invest? The Power of Compound Interest',
                duration: '5 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Investing grows your wealth over time through compound interest - earning returns on your returns.',
                        },
                        {
                            type: 'list',
                            title: 'Key Principles',
                            items: [
                                'Start early: Time is your biggest advantage',
                                'Invest regularly: Dollar-cost averaging reduces risk',
                                'Diversify: Don\'t put all eggs in one basket',
                                'Think long-term: Ignore short-term volatility',
                                'Low fees matter: Index funds beat most active funds',
                            ],
                        },
                    ],
                },
            },
            {
                id: 2,
                title: 'Stocks vs. Bonds',
                duration: '6 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Stocks represent ownership; Bonds represent debt. A balanced portfolio usually contains both.',
                        },
                        {
                            type: 'list',
                            title: 'The Trade-off',
                            items: [
                                'Stocks (Equities): High growth potential, higher volatility.',
                                'Bonds (Fixed Income): Lower growth, provides stability.',
                                'Risk Appetite: Your age and goals determine your mix.',
                                'Dividends: Payments made by companies to shareholders.',
                                'Interest: Payments made by bond issuers to lenders.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 3,
                title: 'Index Funds Basics',
                duration: '5 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Index funds allow you to own a piece of hundreds of companies at once, with very low fees.',
                        },
                        {
                            type: 'list',
                            title: 'Why Index over Individual?',
                            items: [
                                'Instant Diversification: No single company crash ruins you.',
                                'Lower Cost: No expensive fund managers to pay.',
                                'Performance: Historically beats 90% of professional traders.',
                                'Ease of Use: "Set it and forget it" investing.',
                                'Market Matching: You earn exactly what the market earns.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 4,
                title: 'Risk vs. Reward',
                duration: '6 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'You cannot get high returns without some level of risk. The secret is "managing" the risk.',
                        },
                        {
                            type: 'list',
                            title: 'Types of Risk',
                            items: [
                                'Market Risk: The entire market goes down.',
                                'Inflation Risk: Your money loses purchasing power.',
                                'Liquidity Risk: You can\'t get your cash out quickly.',
                                'Concentration Risk: Too much money in one company.',
                                'Time Horizon: Short-term is risky; long-term is safer.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 5,
                title: 'Starting with €100',
                duration: '5 min',
                type: 'lesson',
                releaseDate: '2026-04-01',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'You dont need to be rich to start investing. €100 is plenty to begin your journey.',
                        },
                        {
                            type: 'list',
                            title: 'Action Plan',
                            items: [
                                'Open a Low-Cost Brokerage account.',
                                'Look for Fractional Shares (buy pieces of stocks).',
                                'Set up an Automatic Transfer of €25/week.',
                                'Buy a Total World Stock Index Fund.',
                                'Reinvest your dividends automatically.',
                            ],
                        },
                    ],
                },
            },
        ],
    },
    {
        id: 'building-wealth',
        title: 'Building Wealth',
        icon: '💎',
        description: 'Real estate, side hustles & passive income',
        color: '#fbbf24',
        isPremium: true,
        lessons: [
            {
                id: 1,
                title: 'Compound Interest Deep Dive',
                duration: '7 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Albert Einstein called compound interest the "Eighth Wonder of the World". Here is why.',
                        },
                        {
                            type: 'list',
                            title: 'The Math of Wealth',
                            items: [
                                'Exponential Growth: Gains grow slowly at first, then explode.',
                                'The Rule of 72: Divide 72 by interest rate to see when money doubles.',
                                'Contribution vs. Interest: Eventually, interest outearns your savings.',
                                'Consistency: Even small monthly amounts build millions.',
                                'Starting Late: Why you have to save 3x more if you wait 10 years.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 2,
                title: 'Retirement Planning',
                duration: '8 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Retirement isnt an age; its a financial number. Lets find yours.',
                        },
                        {
                            type: 'list',
                            title: 'The Standard Path',
                            items: [
                                'The 4% Rule: How much you can safely withdraw annually.',
                                'Social Security/Pension: Understanding your government safety net.',
                                'Private Pensions: Maximizing employer match (free money!).',
                                'FIRE Movement: Financial Independence, Retire Early.',
                                'Healthcare Costs: The hidden expense in retirement.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 3,
                title: 'Real Estate Basics',
                duration: '7 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Physical assets can provide both cash flow and appreciation over the long term.',
                        },
                        {
                            type: 'list',
                            title: 'Ways to Enter',
                            items: [
                                'Primary Residence: Building equity instead of paying rent.',
                                'Rental Properties: Tenant pays your mortgage.',
                                'REITs: Real Estate Investment Trusts (invest like stocks).',
                                'Flipping: High risk, high Reward strategy.',
                                'House Hacking: Living in one part, renting the other.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 4,
                title: 'Side Hustle Strategies',
                duration: '6 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Increase your "top line" income to accelerate your path to wealth.',
                        },
                        {
                            type: 'list',
                            title: 'Skill-Based Income',
                            items: [
                                'Freelancing: Trading time for high hourly rates.',
                                'Digital Products: Create once, sell forever.',
                                'Service Business: Lawn care, cleaning, pet sitting.',
                                'Content Creation: Building an audience niche.',
                                'Scalability: Can this business run without you eventually?',
                            ],
                        },
                    ],
                },
            },
            {
                id: 5,
                title: 'Passive Income Streams',
                duration: '7 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: '"If you dont find a way to make money while you sleep, you will work until you die." - Warren Buffett.',
                        },
                        {
                            type: 'list',
                            title: 'Passive Reality',
                            items: [
                                'Dividend Stocks: Quarterly payments for doing nothing.',
                                'High-Yield Savings: Interest income on cash.',
                                'Royalties: From books, music, or patents.',
                                'Affiliate Marketing: Referral income on products.',
                                'The Truth: Most passive income takes high ACTIVE work upfront.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 6,
                title: 'Wealth Mindset',
                duration: '5 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Wealth is what you dont see. Its the cars you dont buy and the watches you dont wear.',
                        },
                        {
                            type: 'list',
                            title: 'Mindset Shifts',
                            items: [
                                'Assets vs. Liabilities: Buy things that pay you.',
                                'Delayed Gratification: €100 today vs. €10,000 in 30 years.',
                                'Avoiding Lifestyle Creep: Keep expenses flat as income rises.',
                                'Ownership: Aim to own, not just consume.',
                                'Abundance vs. Scarcity: Focusing on growth, not just saving.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 7,
                title: 'Net Worth Tracking',
                duration: '6 min',
                type: 'lesson',
                isPremium: true,
                releaseDate: '2026-05-01',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Your net worth is your true financial scoreboard. Assets minus Liabilities.',
                        },
                        {
                            type: 'list',
                            title: 'What to Include',
                            items: [
                                'Assets: Cash, Investments, Property value, Car (maybe).',
                                'Liabilities: Mortgages, Student loans, Credit card debt.',
                                'Quarterly Review: The trend is more important than the number.',
                                'The Goal: A positive, growing line over decades.',
                                'Separation: You are not your bank account balance.',
                            ],
                        },
                    ],
                },
            },
        ],
    },
    {
        id: 'financial-myths',
        title: 'Financial Myths',
        icon: '🔍',
        description: 'Debunking money misconceptions',
        color: '#ef4444',
        isPremium: true,
        lessons: [
            {
                id: 1,
                title: 'Rent is a Waste of Money',
                duration: '6 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'One of the biggest financial myths is that renting is "throwing money away". The truth is more complex.',
                        },
                        {
                            type: 'list',
                            title: 'The Reality of Renting',
                            items: [
                                'Rent is the MAXIMUM you pay; a mortgage is the MINIMUM.',
                                'Renting gives you mobility to move for better jobs.',
                                'Maintenance/taxes are the landlord\'s problem, not yours.',
                                'Unrecoverable Costs: Interest, property tax, and maintenance exist in buying too.',
                                'Opportunity Cost: Investing your down payment might outearn home appreciation.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 2,
                title: 'I Need a Lot of Money to Start',
                duration: '5 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Waiting until you are "rich" to invest is the surest way to never become rich.',
                        },
                        {
                            type: 'list',
                            title: 'Starting Small',
                            items: [
                                'Fractional Shares: Buy 0.001 of an expensive stock.',
                                'Micro-investing: Apps that round up your spare change.',
                                'The Cost of Waiting: €100/mo at 20 is better than €1000/mo at 40.',
                                'Building the Habit: The behavior is more important than the amount.',
                                'Avoid "All or Nothing": Even €5 a week makes a difference over decades.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 3,
                title: 'You Should Focus on Saving',
                duration: '6 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Saving is defensive; Earning is offensive. You cannot save your way to being a billionaire.',
                        },
                        {
                            type: 'list',
                            title: 'Income vs. Saving',
                            items: [
                                'Limit to Savings: You can only cut your coffee budget so much.',
                                'Unlimited Upside: You can always earn more money.',
                                'Inflation: Cash in a savings account loses value over time.',
                                'High ROI: Investing in yourself (skills) often outearns the stock market.',
                                'The Balance: Save to invest, don\'t just save to save.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 4,
                title: 'Gold is the Safest Investment',
                duration: '7 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Gold is often seen as a safe haven, but its long-term performance might surprise you.',
                        },
                        {
                            type: 'list',
                            title: 'The Truth about Gold',
                            items: [
                                'Non-Productive Asset: Gold doesn\'t produce earnings or dividends.',
                                'Volatility: Gold can crash just like stocks.',
                                'Storage Costs: Physical gold is expensive to keep safe.',
                                'Inflation Protection: Stocks historically beat gold over 50-year periods.',
                                'Speculation vs. Investing: Buying gold is usually a bet on fear.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 5,
                title: 'I Can Time the Market',
                duration: '6 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Trying to "buy low and sell high" is a game that even professionals usually lose.',
                        },
                        {
                            type: 'list',
                            title: 'Time in the Market',
                            items: [
                                'Missing the Best Days: Missing just the 10 best days kills your returns.',
                                'Emotional Sabotage: Fear makes you sell low; Greed makes you buy high.',
                                'Taxes and Fees: Frequent trading eats your profits through costs.',
                                'Consistency: Dollar-cost averaging (DCA) is the math-proven winner.',
                                'Predictions: If someone could time the market, they wouldn\'t be selling courses.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 6,
                title: 'Credit Cards are Evil',
                duration: '5 min',
                type: 'lesson',
                isPremium: true,
                releaseDate: '2026-06-01',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Credit cards are not evil; they are financial chainsaws. In the hands of a pro, they are useful; otherwise, they cut you.',
                        },
                        {
                            type: 'list',
                            title: 'The Pro Strategy',
                            items: [
                                'Safety: Better fraud protection than debit cards.',
                                'Rewards: Earning 2% back on everything is a permanent discount.',
                                'Credit Building: Necessary for getting a low mortgage rate later.',
                                'Zero Interest: Only works if you pay the statement balance every month.',
                                'Mindset: See it as a tool, not a "limit" to spend.',
                            ],
                        },
                    ],
                },
            },
        ],
    },
    {
        id: 'advanced-strategies',
        title: 'Advanced Strategies',
        icon: '🚀',
        description: 'Tax optimization & retirement',
        color: '#8b5cf6',
        isPremium: true,
        lessons: [
            {
                id: 1,
                title: 'Tax Optimization Basics',
                duration: '8 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Its not about how much you make, but how much you KEEP. Taxes are your biggest expense.',
                        },
                        {
                            type: 'list',
                            title: 'Legal Strategies',
                            items: [
                                'Tax-Advantaged Accounts: IRAs, 401ks, ISAs (country dependent).',
                                'Long-Term Capital Gains: Keeping assets >1 year for lower rates.',
                                'Tax-Loss Harvesting: Selling losers to offset gains.',
                                'Dividend Tax: Understanding qualified vs. ordinary dividends.',
                                'Deductions: Business expenses, charitable giving, and home office.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 2,
                title: 'Asset Allocation Strategies',
                duration: '7 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'How you divide your money (Stocks/Bonds/Cash) determines 90% of your performance.',
                        },
                        {
                            type: 'list',
                            title: 'Strategic Mixes',
                            items: [
                                'The 60/40 Split: The classic balanced approach.',
                                'Aggressive Growth: 90% Stocks / 10% Bonds.',
                                'The Bogleheads 3-Fund Portfolio: Simple and effective.',
                                'Target Date Funds: Automatically adjust as you age.',
                                'Rebalancing: Buying low and selling high automatically every year.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 3,
                title: 'Value vs. Growth Investing',
                duration: '7 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Do you want current stability at a discount, or future growth at a premium price?',
                        },
                        {
                            type: 'list',
                            title: 'The Battle',
                            items: [
                                'Growth Stocks: High P/E ratios, no dividends, reinvesting every cent.',
                                'Value Stocks: Low P/E, established companies, high dividends.',
                                'Cyclical Stocks: Move with the economy (cars, travel).',
                                'Defensive Stocks: Stay flat during recessions (utilities, food).',
                                'Total Market Approach: Why choosing one usually underperforms both.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 4,
                title: 'Introduction to Options',
                duration: '8 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Options are derivatives that give you the RIGHT, but not the obligation, to buy/sell assets.',
                        },
                        {
                            type: 'list',
                            title: 'Basics of Derivatives',
                            items: [
                                'Calls vs. Puts: Betting on up vs. betting on down.',
                                'Hedging: Using options as "insurance" for your portfolio.',
                                'Leverage: High risk/High reward with less capital.',
                                'Theta Decay: Why time is the enemy of an options buyer.',
                                'Warning: Options can go to zero. Never use money you can\'t lose.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 5,
                title: 'Cryptocurrency & Digital Assets',
                duration: '7 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Crypto is a new asset class based on blockchain technology. Here is how to approach it safely.',
                        },
                        {
                            type: 'list',
                            title: 'Modern Portfolio Theory',
                            items: [
                                'Store of Value: Bitcoin as "Digital Gold".',
                                'Smart Contracts: Ethereum and the decentralized web.',
                                'Volatility Management: Keeping crypto to <5% of your total wealth.',
                                'Custody: The difference between exchanges and hardware wallets.',
                                'The Risks: Regulation, hacks, and extreme price swings.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 6,
                title: 'Creating a Trust/Estate Plan',
                duration: '6 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Protecting your wealth after you are gone is the final step in the financial journey.',
                        },
                        {
                            type: 'list',
                            title: 'The Legacy Plan',
                            items: [
                                'Wills: Simple instructions for asset distribution.',
                                'Trusts: Avoiding probate and managing money for heirs.',
                                'Power of Attorney: Who makes decisions if you can\'t?',
                                'Beneficiary Designations: Keeping accounts updated.',
                                'Charitable Giving: Building a legacy through donation.',
                            ],
                        },
                    ],
                },
            },
            {
                id: 7,
                title: 'The 10-Year Wealth Strategy',
                duration: '10 min',
                type: 'lesson',
                isPremium: true,
                releaseDate: '2026-07-01',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'A comprehensive roadmap to move from zero to financial independence in one decade.',
                        },
                        {
                            type: 'list',
                            title: 'The Roadmap',
                            items: [
                                'Year 1: Debt elimination and emergency fund mastery.',
                                'Year 2-3: Maxing out tax-advantaged accounts.',
                                'Year 4-6: Building the bridge (taxable brokerage accounts).',
                                'Year 7-9: Exploring alternative assets (Real Estate/Crypto).',
                                'Year 10: Optimizing for withdrawal and partial retirement.',
                            ],
                        },
                    ],
                },
            },
        ],
    },
];
