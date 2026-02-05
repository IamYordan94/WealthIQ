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
                duration: '12 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'The 50/30/20 rule is a simple budgeting framework that helps you manage your money effectively. Created by U.S. Senator Elizabeth Warren, this rule provides a clear structure for allocating your after-tax income into three essential categories. Unlike complex budgeting systems that require detailed tracking of every expense, the 50/30/20 rule gives you flexibility while ensuring you cover your essentials and build wealth.',
                        },
                        {
                            type: 'text',
                            content: 'The beauty of this rule lies in its simplicity. You don\'t need to track every coffee purchase or categorize hundreds of transactions. Instead, you focus on three broad categories that cover everything in your financial life. This makes it sustainable long-term, which is the key to any successful budgeting strategy.',
                        },
                        {
                            type: 'list',
                            title: 'How It Works',
                            items: [
                                '50% Needs: Rent or mortgage, utilities, groceries, insurance, minimum debt payments, and essential transportation. These are expenses you cannot avoid.',
                                '30% Wants: Entertainment, dining out, hobbies, subscriptions, shopping for non-essentials, and vacations. These enhance your quality of life but aren\'t necessary for survival.',
                                '20% Savings: Emergency fund contributions, investments, retirement accounts, extra debt payments beyond minimums, and other wealth-building activities.',
                                'Adjust percentages based on your situation: High earners might save 30%+, while those in expensive cities might need 60% for needs.',
                            ],
                        },
                        {
                            type: 'text',
                            content: 'Real-world example: If you earn €3,000 per month after taxes, you would allocate €1,500 to needs (rent, food, bills), €900 to wants (entertainment, dining), and €600 to savings and debt payoff. This ensures you\'re building wealth while still enjoying life.',
                        },
                        {
                            type: 'list',
                            title: 'Common Mistakes to Avoid',
                            items: [
                                'Counting wants as needs: Netflix and gym memberships are wants, not needs.',
                                'Ignoring the savings category: This 20% is non-negotiable for building wealth.',
                                'Being too rigid: The percentages are guidelines. Adjust for your unique situation.',
                                'Forgetting irregular expenses: Annual insurance or car maintenance should be averaged monthly.',
                            ],
                        },
                    ],
                    quiz: {
                        questions: [
                            {
                                question: "What percentage should go to 'Needs'?",
                                options: ["20%", "30%", "50%", "10%"],
                                correctIndex: 2,
                                explanation: "The rule recommends 50% for Needs, 30% for Wants, and 20% for Savings. Needs include essential expenses like housing, food, utilities, and minimum debt payments."
                            },
                            {
                                question: "Which of these is considered a 'Want' rather than a 'Need'?",
                                options: ["Rent or mortgage payment", "Groceries", "Netflix subscription", "Health insurance"],
                                correctIndex: 2,
                                explanation: "Netflix is a 'Want' - it enhances your quality of life but isn't necessary for survival. Rent, groceries, and health insurance are all 'Needs'."
                            },
                            {
                                question: "If you earn €2,000/month after taxes, how much should go to savings according to the 50/30/20 rule?",
                                options: ["€200", "€400", "€600", "€800"],
                                correctIndex: 1,
                                explanation: "20% of €2,000 = €400 should go to savings. This includes emergency fund contributions, investments, and extra debt payments."
                            }
                        ]
                    }
                },
            },
            {
                id: 2,
                title: 'Building Your Emergency Fund',
                duration: '10 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'An emergency fund protects you from unexpected expenses and financial stress. Think of it as your financial safety net - when life throws you a curveball (job loss, medical emergency, car breakdown), your emergency fund prevents you from going into debt or derailing your financial goals.',
                        },
                        {
                            type: 'text',
                            content: 'Without an emergency fund, a single unexpected expense can force you to use credit cards, take out high-interest loans, or dip into retirement savings. This creates a cycle of debt that can take years to escape. An emergency fund breaks this cycle by giving you cash reserves to handle life\'s surprises.',
                        },
                        {
                            type: 'list',
                            title: 'Getting Started',
                            items: [
                                'Start with €1,000 as your initial goal: This covers most small emergencies like car repairs or medical copays.',
                                'Build up to 3-6 months of expenses: Calculate your essential monthly expenses (rent, food, utilities, insurance) and multiply by 3-6. This covers job loss or major emergencies.',
                                'Keep it in a high-yield savings account: You want it accessible within 24-48 hours, but earning interest while it sits.',
                                'Only use for true emergencies: Job loss, medical emergencies, essential car/home repairs. Not for vacations or shopping.',
                                'Replenish immediately after using it: Treat it like a bill - if you use €500, make it a priority to rebuild that €500.',
                            ],
                        },
                        {
                            type: 'text',
                            content: 'Case study: Maria had €2,000 in her emergency fund when she lost her job. Instead of panicking and taking the first low-paying job, she had 3 months to find the right opportunity. This led to a 30% salary increase at her new position - the emergency fund paid for itself many times over.',
                        },
                        {
                            type: 'list',
                            title: 'Building Strategies',
                            items: [
                                'Automate transfers: Set up automatic monthly transfers from checking to savings.',
                                'Save windfalls: Tax refunds, bonuses, and gifts go straight to emergency fund.',
                                'Cut one expense: Cancel one subscription or reduce dining out, redirect that money.',
                                'Side hustle income: Dedicate 50% of any side income to emergency fund until it\'s full.',
                            ],
                        },
                    ],
                    quiz: {
                        question: "How many months of expenses should a full emergency fund cover?",
                        options: ["1 month", "3-6 months", "12 months", "24 months"],
                        correctIndex: 1,
                        explanation: "Financial experts generally recommend having 3 to 6 months of basic living expenses saved in an emergency fund. This provides enough cushion for job loss or major emergencies while not being excessive."
                    }
                },
            },
            {
                id: 3,
                title: 'Income vs. Expenses',
                duration: '2 min',
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
                    quiz: {
                        question: "What is the 'Gap' in your cash flow?",
                        options: [
                            "Gross Income minus Net Income",
                            "Net Income minus Total Expenses",
                            "Spending divided by Saving",
                            "The amount you owe on credit cards"
                        ],
                        correctIndex: 1,
                        explanation: "The Gap is your Net Income minus your Total Expenses. This represents the money available for your wealth goals."
                    }
                },
            },
            {
                id: 4,
                title: 'Emergency Funds 101',
                duration: '2 min',
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
                    quiz: {
                        question: "Why should you use a High-Yield Savings Account (HYSA) for your emergency fund?",
                        options: [
                            "To hide money from the government",
                            "To earn zero interest",
                            "To get better growth while keeping cash safe and accessible",
                            "To invest in risky stocks"
                        ],
                        correctIndex: 2,
                        explanation: "An HYSA offers much higher interest rates than standard savings accounts while maintaining the liquidity needed for emergencies."
                    }
                },
            },
            {
                id: 5,
                title: 'Tracking Your Spending',
                duration: '10 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Knowing where every euro goes is the only way to find "hidden" savings. Most people dramatically underestimate their spending, especially on small purchases that add up quickly. Tracking your spending creates awareness, which is the first step to making better financial decisions.',
                        },
                        {
                            type: 'text',
                            content: 'Studies show that people who track their spending save 20-30% more than those who don\'t. The act of recording each purchase makes you more mindful about your spending choices. You start to question whether each purchase aligns with your values and goals.',
                        },
                        {
                            type: 'list',
                            title: 'Methods to Track',
                            items: [
                                'The App Method: Automated syncing (Mint, YNAB, Personal Capital). Connects to bank accounts and categorizes automatically. Best for busy people who want hands-off tracking.',
                                'The Spreadsheet: Manual entry (Google Sheets, Excel). Forces you to see every transaction. Creates high awareness but requires discipline.',
                                'The Envelope System: Cash only for variable spending. Physical cash creates psychological barriers to spending. Great for overspenders.',
                                'Daily Check-in: 2 minutes every morning reviewing yesterday\'s spending. Quick and maintains awareness without being overwhelming.',
                                'Monthly Review: Categorize and compare to budget. Identify patterns and adjust behavior. Essential for long-term success.',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'What to Track',
                            items: [
                                'Every single purchase, no matter how small',
                                'Cash transactions (often forgotten but significant)',
                                'Automatic subscriptions and recurring charges',
                                'Irregular expenses (annual fees, car maintenance)',
                                'Income sources (to understand your full financial picture)',
                            ],
                        },
                    ],
                    quiz: {
                        question: "What is the main benefit of tracking your spending?",
                        options: [
                            "It automatically saves money for you",
                            "It creates awareness that leads to better financial decisions",
                            "It prevents all unnecessary spending",
                            "It's only useful for people with debt"
                        ],
                        correctIndex: 1,
                        explanation: "Tracking spending creates awareness, which is the foundation of better financial decisions. Studies show people who track spending save 20-30% more than those who don't."
                    }
                },
            },
            {
                id: 6,
                title: 'The Psychology of Spending',
                duration: '12 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Understanding why you spend money is just as important as knowing how much you spend. Your brain is wired to make emotional decisions about money, often working against your long-term financial goals. Marketers and retailers exploit these psychological triggers to get you to spend more.',
                        },
                        {
                            type: 'text',
                            content: 'The "pain of paying" is real - your brain experiences actual discomfort when spending cash, but this pain is reduced with credit cards, mobile payments, and "buy now, pay later" options. This is why people spend 12-18% more when using credit cards versus cash.',
                        },
                        {
                            type: 'list',
                            title: 'Common Psychological Traps',
                            items: [
                                'Anchoring: First price you see influences your perception. Retailers show high prices first to make actual prices seem reasonable.',
                                'Loss Aversion: Fear of missing out (FOMO) drives impulse purchases. "Limited time" offers exploit this.',
                                'Social Proof: "Everyone else is buying it" makes you want it too. Reviews and popularity indicators trigger this.',
                                'Reciprocity: Free samples or gifts create obligation to buy. "Buy one get one" feels like a deal even when it\'s not.',
                                'Mental Accounting: Treating money differently based on source. Tax refunds feel like "free money" even though it\'s yours.',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'Defense Strategies',
                            items: [
                                'The 24-hour rule: Wait 24 hours before any non-essential purchase over €50.',
                                'Use cash for discretionary spending: Physical cash increases pain of paying.',
                                'Unsubscribe from marketing emails: Remove temptation at the source.',
                                'Create a "want list": Write down items you want, review monthly. Many lose appeal over time.',
                                'Calculate in hours worked: "This costs 8 hours of work - is it worth it?"',
                            ],
                        },
                    ],
                    quiz: {
                        question: "Why do people spend more with credit cards than cash?",
                        options: [
                            "Credit cards have higher limits",
                            "The 'pain of paying' is reduced with credit cards",
                            "Credit cards are more convenient",
                            "Cash is harder to carry"
                        ],
                        correctIndex: 1,
                        explanation: "The 'pain of paying' is a real psychological phenomenon. Your brain experiences discomfort when spending cash, but this pain is reduced with credit cards, leading to 12-18% higher spending."
                    }
                },
            },
            {
                id: 7,
                title: 'Automating Your Finances',
                duration: '11 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Automation is the secret weapon of successful wealth builders. When you automate your savings and investments, you remove the need for willpower and discipline. Money moves to the right places before you can spend it on wants. This is called "paying yourself first" - and it works.',
                        },
                        {
                            type: 'text',
                            content: 'The average person makes over 200 financial decisions per day. Decision fatigue is real - by the end of the day, your willpower is depleted. Automation eliminates these decisions, ensuring your money goes where it should even when you\'re tired, stressed, or tempted.',
                        },
                        {
                            type: 'list',
                            title: 'What to Automate',
                            items: [
                                'Emergency fund contributions: Set up automatic transfer on payday to savings account.',
                                'Retirement contributions: 401(k) or pension deductions happen before you see the money.',
                                'Investment contributions: Monthly automatic transfers to brokerage account.',
                                'Bill payments: Set up autopay for all recurring bills to avoid late fees.',
                                'Debt payments: Extra payments beyond minimums should be automated.',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'Automation Setup Steps',
                            items: [
                                'Calculate your savings goal: Determine how much you can save monthly.',
                                'Set up separate accounts: Emergency fund, investments, and spending should be separate.',
                                'Schedule transfers: Set transfers for the day after payday (or same day if possible).',
                                'Start small and increase: Begin with manageable amounts, increase by 1% every 3 months.',
                                'Review quarterly: Check that automation is working and adjust as income changes.',
                            ],
                        },
                        {
                            type: 'text',
                            content: 'Real example: Sarah automated €200/month to savings and €300/month to investments. After 2 years, she had €4,800 in emergency fund and €7,200 invested, plus growth. She never missed the money because it was gone before she could spend it.',
                        },
                    ],
                    quiz: {
                        question: "What is the main benefit of automating your finances?",
                        options: [
                            "It eliminates the need for willpower and discipline",
                            "It makes you richer instantly",
                            "It prevents all spending",
                            "It's only for high earners"
                        ],
                        correctIndex: 0,
                        explanation: "Automation removes the need for willpower by moving money to the right places before you can spend it. This is called 'paying yourself first' and is a key strategy for wealth building."
                    }
                },
            },
            {
                id: 8,
                title: 'Negotiating Better Deals',
                duration: '13 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Most people overpay for everything because they never ask for a better deal. Negotiation isn\'t just for car salesmen - it\'s a skill that can save you thousands of euros annually. The worst thing that can happen is someone says "no," but often they\'ll say "yes" or offer a compromise.',
                        },
                        {
                            type: 'text',
                            content: 'Companies budget for negotiations. They expect some customers to ask for discounts, so they build this into their pricing. If you don\'t negotiate, you\'re subsidizing the deals given to people who do. This is especially true for services like insurance, internet, phone plans, and subscriptions.',
                        },
                        {
                            type: 'list',
                            title: 'What You Can Negotiate',
                            items: [
                                'Insurance premiums: Call annually to review and ask for discounts. Loyalty discounts, bundling, and good driving records can save 10-20%.',
                                'Internet and phone bills: Threaten to switch providers. Retention departments have special offers not available to new customers.',
                                'Credit card interest rates: Call and ask for a lower rate. If you have good payment history, they often comply.',
                                'Medical bills: Ask for cash discounts (often 10-20% off) or payment plans. Hospitals negotiate regularly.',
                                'Subscription services: Ask for student discounts, annual pricing, or family plans. Many companies offer these but don\'t advertise.',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'Negotiation Strategies',
                            items: [
                                'Do your research: Know competitor prices and your current rate before calling.',
                                'Be polite but firm: "I\'ve been a loyal customer for X years. Can you match this competitor\'s price?"',
                                'Ask for the retention department: These teams have more authority to offer deals.',
                                'Be willing to walk away: Sometimes you need to cancel to get the best offer (they\'ll call you back).',
                                'Bundle services: Combining services (insurance, internet, phone) often gets better rates.',
                            ],
                        },
                    ],
                    quiz: {
                        question: "What is the worst outcome when negotiating?",
                        options: [
                            "You get a better deal",
                            "Someone says 'no'",
                            "You save money",
                            "You have to switch providers"
                        ],
                        correctIndex: 1,
                        explanation: "The worst thing that can happen is someone says 'no.' But often they'll say 'yes' or offer a compromise. Companies budget for negotiations, so asking costs you nothing and can save thousands."
                    }
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
                duration: '2 min',
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
                    quiz: {
                        question: "What factor has the BIGGEST impact on your credit score?",
                        options: ["Credit mix (10%)", "New credit (10%)", "Payment history (35%)", "Credit age (15%)"],
                        correctIndex: 2,
                        explanation: "Payment history accounts for 35% of your credit score - the largest single factor. Paying bills on time is the most important thing you can do for your credit."
                    }
                },
            },
            {
                id: 2,
                title: 'Choosing a Bank',
                duration: '2 min',
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
                    quiz: {
                        question: "What APY (Annual Percentage Yield) should you look for in a savings account?",
                        options: ["0.01%", "1%", "Greater than 4%", "10%"],
                        correctIndex: 2,
                        explanation: "The lesson recommends looking for savings accounts with APY greater than 4%. This is much higher than traditional banks (often 0.01%) and helps your money grow while staying safe."
                    }
                },
            },
            {
                id: 3,
                title: 'Credit Cards Explained',
                duration: '2 min',
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
                    quiz: {
                        question: "What is the ideal credit card utilization rate?",
                        options: ["50-60%", "30-40%", "1-10%", "90-100%"],
                        correctIndex: 2,
                        explanation: "The lesson states that 1-10% utilization is ideal. While keeping it below 30% is the general rule, maintaining even lower utilization (1-10%) is best for your credit score."
                    }
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
                    quiz: {
                        question: "Which card type is safer for online purchases?",
                        options: ["Debit card", "Credit card", "Both are equally safe", "Neither is safe"],
                        correctIndex: 1,
                        explanation: "Credit cards have much better fraud protection for online purchases. If fraud occurs, it's the bank's money at risk, not yours. Debit cards directly access your bank account, making fraud more dangerous."
                    }
                },
            },
            {
                id: 5,
                title: 'Building Credit from Scratch',
                duration: '10 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Starting from zero? Here is how to create a perfect credit profile starting today. Building credit takes time - typically 6-12 months to generate a score, and 2-3 years to build excellent credit. But the process is straightforward if you follow the right steps.',
                        },
                        {
                            type: 'text',
                            content: 'Your credit score affects everything: loan interest rates, apartment applications, insurance premiums, and even job opportunities in some fields. A 100-point difference in credit score can cost you tens of thousands of euros over a 30-year mortgage. Starting early and doing it right pays massive dividends.',
                        },
                        {
                            type: 'list',
                            title: 'Step-by-Step Build',
                            items: [
                                'Become an Authorized User on a family member\'s card: If they have excellent credit and always pay on time, this gives you instant credit history. Make sure they have low utilization and perfect payment history.',
                                'Get a Secured Credit Card (deposit = limit): Put down €200-500 as collateral. Use it responsibly for 6-12 months, then upgrade to unsecured card and get your deposit back.',
                                'Use it for ONE small subscription only: Set up Netflix or Spotify on the card, set autopay to pay in full, then cut up the card. This shows activity without risk.',
                                'Wait 6-12 months for a score to generate: FICO requires at least 6 months of history. VantageScore can generate in 1-2 months but is less commonly used.',
                                'Apply for your first independent "no fee" card: After building history, apply for a card with no annual fee. Keep your first card open forever - it establishes your credit age.',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'Common Mistakes to Avoid',
                            items: [
                                'Applying for multiple cards at once: Each application causes a hard inquiry, lowering your score temporarily.',
                                'Closing your first credit card: This reduces your credit age and available credit, hurting your score.',
                                'Using more than 30% of your limit: High utilization signals risk to lenders.',
                                'Missing payments: One late payment can drop your score 50-100 points and stay on your report for 7 years.',
                            ],
                        },
                    ],
                    quiz: {
                        question: "What is the first step to building credit from scratch?",
                        options: [
                            "Apply for multiple credit cards at once",
                            "Become an authorized user on a family member's card",
                            "Take out a large loan",
                            "Wait until you're 30 years old"
                        ],
                        correctIndex: 1,
                        explanation: "Becoming an authorized user on a family member's card is the first step. This allows you to benefit from their credit history while you start building your own, giving you instant credit history if they have excellent credit."
                    }
                },
            },
            {
                id: 6,
                title: 'Understanding APR vs APY',
                duration: '11 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'APR (Annual Percentage Rate) and APY (Annual Percentage Yield) sound similar but mean very different things. Understanding the difference can save you thousands of euros and help you earn more on your savings.',
                        },
                        {
                            type: 'text',
                            content: 'APR is the interest rate you pay on borrowed money (credit cards, loans). APY is the interest rate you earn on savings and investments, accounting for compound interest. The key difference is compounding - APY includes the effect of earning interest on your interest, while APR is a simple annual rate.',
                        },
                        {
                            type: 'list',
                            title: 'APR Explained',
                            items: [
                                'Simple interest rate: If you borrow €1,000 at 12% APR, you pay €120 in interest per year.',
                                'Doesn\'t account for compounding: APR is straightforward - it\'s the annual rate you pay.',
                                'Used for credit cards and loans: Always look for the lowest APR when borrowing.',
                                'Variable vs Fixed: Variable APR changes with market rates, fixed stays the same.',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'APY Explained',
                            items: [
                                'Includes compound interest: If you save €1,000 at 4% APY, you earn interest on your interest, so you get more than €40.',
                                'Higher than APR for same rate: 4% APY earns more than 4% APR because of compounding.',
                                'Used for savings accounts and investments: Always look for the highest APY when saving.',
                                'Compounding frequency matters: Daily compounding earns more than monthly or annual.',
                            ],
                        },
                        {
                            type: 'text',
                            content: 'Example: €10,000 at 5% APR earns €500/year. The same amount at 5% APY (compounded monthly) earns €512.67/year. Over 10 years, that\'s an extra €127 - and the difference grows exponentially over time.',
                        },
                    ],
                    quiz: {
                        question: "What is the key difference between APR and APY?",
                        options: [
                            "APR is for savings, APY is for loans",
                            "APY includes compound interest, APR does not",
                            "They are the same thing",
                            "APR is always higher than APY"
                        ],
                        correctIndex: 1,
                        explanation: "APY includes the effect of compound interest (earning interest on interest), while APR is a simple annual rate. This is why APY is higher than APR for the same percentage rate."
                    }
                },
            },
            {
                id: 7,
                title: 'Credit Card Rewards Optimization',
                duration: '12 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Credit card rewards are free money - but only if you use them correctly. The average household earns €300-600 per year in credit card rewards, but many people leave money on the table or worse, pay more in interest than they earn in rewards.',
                        },
                        {
                            type: 'text',
                            content: 'The golden rule: Never carry a balance. If you pay interest, you\'re losing money. Rewards cards typically have higher interest rates (18-25% APR). If you carry a €1,000 balance, you\'ll pay €180-250 in interest annually, wiping out any rewards you earn.',
                        },
                        {
                            type: 'list',
                            title: 'Types of Rewards Cards',
                            items: [
                                'Cashback cards: Simple 1-5% back on purchases. Best for simplicity. Examples: 2% on everything, 5% on rotating categories.',
                                'Travel cards: Points that transfer to airlines/hotels. Best for frequent travelers. Can be worth 2-5 cents per point if used strategically.',
                                'Points cards: Flexible points redeemable for travel, cash, or merchandise. Best for flexibility. Often 1-2 points per euro spent.',
                                'Store cards: Higher rewards at specific retailers. Only worth it if you shop there frequently.',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'Optimization Strategies',
                            items: [
                                'Use the right card for each category: 5% cashback on groceries, 3% on gas, 2% on everything else.',
                                'Maximize sign-up bonuses: Many cards offer €200-500 bonuses for spending €3,000-5,000 in first 3 months.',
                                'Pay in full every month: Set autopay to statement balance to never pay interest.',
                                'Redeem strategically: Cashback is simplest, but travel points can be worth 2-3x more if used for premium flights.',
                                'Avoid annual fees unless benefits exceed cost: €95 annual fee is worth it if you get €200+ in value.',
                            ],
                        },
                    ],
                    quiz: {
                        question: "What is the golden rule of credit card rewards?",
                        options: [
                            "Always carry a balance to build credit",
                            "Never carry a balance - pay in full every month",
                            "Only use rewards cards for large purchases",
                            "Apply for as many cards as possible"
                        ],
                        correctIndex: 1,
                        explanation: "The golden rule is to never carry a balance. If you pay interest (typically 18-25% APR), you're losing more money than you earn in rewards. Rewards are only free money if you pay in full monthly."
                    }
                },
            },
            {
                id: 8,
                title: 'Banking Fees to Avoid',
                duration: '10 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Banking fees are wealth killers. The average person pays €200-400 per year in unnecessary banking fees. These fees compound over decades - €300/year invested at 7% becomes €30,000 over 30 years. Every fee avoided is money that can work for you instead of against you.',
                        },
                        {
                            type: 'text',
                            content: 'Banks make billions from fees because most people don\'t pay attention. They count on you not noticing small fees that add up. But with online banks and credit unions offering fee-free accounts, there\'s no reason to pay these fees anymore.',
                        },
                        {
                            type: 'list',
                            title: 'Common Fees to Avoid',
                            items: [
                                'Monthly maintenance fees: €5-15/month just to have an account. Many banks waive these if you maintain minimum balance or direct deposit.',
                                'ATM fees: €2-5 per withdrawal at out-of-network ATMs. Use your bank\'s network or get a bank that reimburses all ATM fees.',
                                'Overdraft fees: €25-35 per transaction when you overdraw. Turn off overdraft "protection" - it\'s better to have a transaction declined than pay fees.',
                                'Foreign transaction fees: 3% on purchases abroad. Get a card with no foreign transaction fees if you travel.',
                                'Paper statement fees: Some banks charge for mailed statements. Go paperless (it\'s also better for the environment).',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'How to Avoid Fees',
                            items: [
                                'Switch to online banks: Many offer completely fee-free checking and savings accounts.',
                                'Meet minimum balance requirements: If staying with traditional bank, maintain the minimum to waive fees.',
                                'Set up direct deposit: Many banks waive fees if you have direct deposit.',
                                'Use in-network ATMs: Plan ahead and use your bank\'s ATM network.',
                                'Opt out of overdraft: Better to have a transaction declined than pay €35 fees.',
                            ],
                        },
                    ],
                    quiz: {
                        question: "What is the best way to avoid banking fees?",
                        options: [
                            "Accept them as unavoidable",
                            "Switch to online banks or credit unions that offer fee-free accounts",
                            "Only use cash",
                            "Avoid banks entirely"
                        ],
                        correctIndex: 1,
                        explanation: "The best way to avoid fees is to switch to online banks or credit unions that offer completely fee-free accounts. Many traditional banks charge unnecessary fees that can be avoided."
                    }
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
                duration: '2 min',
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
                    quiz: {
                        question: "What is your biggest advantage when investing?",
                        options: ["Having a lot of money", "Time", "Picking individual stocks", "Timing the market"],
                        correctIndex: 1,
                        explanation: "The lesson states 'Time is your biggest advantage.' Starting early allows compound interest to work its magic, turning small investments into significant wealth over decades."
                    }
                },
            },
            {
                id: 2,
                title: 'Stocks vs. Bonds',
                duration: '2 min',
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
                    quiz: {
                        question: "What do stocks represent?",
                        options: ["Debt you owe", "Ownership in a company", "A loan to the government", "Insurance"],
                        correctIndex: 1,
                        explanation: "Stocks represent ownership in a company. When you buy stock, you become a partial owner (shareholder) and can benefit from the company's growth through price appreciation and dividends."
                    }
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
                    quiz: {
                        question: "What percentage of professional traders do index funds historically beat?",
                        options: ["50%", "70%", "90%", "30%"],
                        correctIndex: 2,
                        explanation: "Index funds historically beat 90% of professional traders. This is because they have lower fees, are diversified, and don't try to time the market - they simply match market performance."
                    }
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
                    quiz: {
                        question: "Which type of risk means you can't access your money quickly?",
                        options: ["Market Risk", "Inflation Risk", "Liquidity Risk", "Concentration Risk"],
                        correctIndex: 2,
                        explanation: "Liquidity Risk is when you can't get your cash out quickly. Some investments (like real estate or certain funds) can't be easily converted to cash without potentially losing value."
                    }
                },
            },
            {
                id: 5,
                title: 'Starting with €100',
                duration: '10 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'You don\'t need to be rich to start investing. €100 is plenty to begin your journey. The biggest barrier to investing isn\'t the amount of money - it\'s getting started. Every euro invested today is worth more than a euro invested tomorrow due to compound interest.',
                        },
                        {
                            type: 'text',
                            content: 'Modern investing platforms have removed the barriers that existed 20 years ago. Fractional shares let you buy pieces of expensive stocks. Low-cost index funds let you own hundreds of companies for €1. Automatic investing makes it effortless. There\'s no excuse not to start.',
                        },
                        {
                            type: 'list',
                            title: 'Action Plan',
                            items: [
                                'Open a Low-Cost Brokerage account: Look for zero-commission trading and no account minimums. Examples: Interactive Brokers, Degiro, Trading 212.',
                                'Look for Fractional Shares: Buy pieces of expensive stocks. Instead of needing €150 for one share, you can buy €10 worth.',
                                'Set up an Automatic Transfer of €25/week: Start small, increase over time. €25/week = €1,300/year invested.',
                                'Buy a Total World Stock Index Fund: Instant diversification across thousands of companies globally. Low fees (under 0.25%).',
                                'Reinvest your dividends automatically: Set dividend reinvestment (DRIP) so your money compounds automatically.',
                            ],
                        },
                        {
                            type: 'text',
                            content: 'Real example: Starting with €100 and investing €25/week for 30 years at 7% average return = €180,000. The total you contributed: €39,100. The power of starting early and being consistent.',
                        },
                    ],
                    quiz: {
                        question: "How much money do you need to start investing according to this lesson?",
                        options: ["€10,000", "€1,000", "€100", "€50,000"],
                        correctIndex: 2,
                        explanation: "The lesson states 'You don't need to be rich to start investing. €100 is plenty to begin your journey.' Fractional shares and low-cost index funds make it possible to start with very small amounts."
                    }
                },
            },
            {
                id: 6,
                title: 'Dollar-Cost Averaging Deep Dive',
                duration: '11 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Dollar-Cost Averaging (DCA) is investing a fixed amount regularly regardless of market conditions. Instead of trying to time the market (which even professionals fail at), you invest consistently. This removes emotion from investing and ensures you buy more shares when prices are low and fewer when prices are high.',
                        },
                        {
                            type: 'text',
                            content: 'The psychological benefit is huge. When markets crash, most people panic and sell. With DCA, you\'re automatically buying more shares at lower prices. This turns market volatility from a threat into an opportunity.',
                        },
                        {
                            type: 'list',
                            title: 'How DCA Works',
                            items: [
                                'Invest fixed amount regularly: €100 every month, regardless of market conditions.',
                                'Automatic purchases: Set up automatic transfers so you don\'t have to think about it.',
                                'Buy more when cheap: When prices drop, your €100 buys more shares.',
                                'Buy fewer when expensive: When prices rise, your €100 buys fewer shares.',
                                'Average out volatility: Over time, you get the average price, not the worst or best.',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'DCA vs Lump Sum',
                            items: [
                                'DCA reduces risk: Spreading investments over time reduces impact of bad timing.',
                                'Lump sum can outperform: If you have a large amount, investing all at once historically beats DCA 2/3 of the time.',
                                'But DCA is safer: If you\'re risk-averse or uncertain, DCA is the better choice.',
                                'Best of both: Invest lump sum if you have it, then continue with DCA for new money.',
                            ],
                        },
                    ],
                    quiz: {
                        question: "What is the main benefit of Dollar-Cost Averaging?",
                        options: [
                            "It guarantees higher returns",
                            "It removes emotion and timing from investing",
                            "It's only for experienced investors",
                            "It requires large amounts of money"
                        ],
                        correctIndex: 1,
                        explanation: "DCA removes emotion and timing from investing. By investing a fixed amount regularly, you buy more shares when prices are low and fewer when high, averaging out market volatility."
                    }
                },
            },
            {
                id: 7,
                title: 'Understanding Market Cycles',
                duration: '12 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Markets move in cycles: expansion, peak, contraction, and trough. Understanding these cycles helps you stay calm during downturns and avoid panic selling. The key insight: every downturn in history has been followed by a recovery, usually stronger than before.',
                        },
                        {
                            type: 'text',
                            content: 'Since 1926, the U.S. stock market has had 15 bear markets (drops of 20%+). Every single one recovered. The average bear market lasts 13 months, while the average bull market lasts 4.5 years. Time in the market beats timing the market.',
                        },
                        {
                            type: 'list',
                            title: 'Market Cycle Phases',
                            items: [
                                'Expansion: Economy growing, stocks rising, optimism high. Best time to invest regularly.',
                                'Peak: Market at highs, euphoria sets in, everyone thinks it will keep going up forever.',
                                'Contraction (Bear Market): Prices fall 20%+, fear sets in, people panic sell. Best buying opportunity.',
                                'Trough: Market bottoms, pessimism extreme, but recovery is beginning. Smart money is buying.',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'How to Navigate Cycles',
                            items: [
                                'Stay invested: Don\'t try to time exits and entries. You\'ll miss the best days.',
                                'Keep investing during downturns: This is when you get the best prices.',
                                'Ignore the noise: Media amplifies fear and greed. Tune it out.',
                                'Focus on long-term: Cycles are short-term. Your 20-30 year timeline smooths them out.',
                                'Rebalance: When stocks outperform, sell some to buy bonds. When bonds outperform, reverse.',
                            ],
                        },
                    ],
                    quiz: {
                        question: "What should you do during a market downturn?",
                        options: [
                            "Sell everything and wait",
                            "Keep investing - this is when you get the best prices",
                            "Only invest in bonds",
                            "Stop all investments"
                        ],
                        correctIndex: 1,
                        explanation: "During downturns, you should keep investing. This is when you get the best prices. Every bear market in history has recovered, and those who stayed invested (or increased investments) during downturns saw the best long-term returns."
                    }
                },
            },
            {
                id: 8,
                title: 'Rebalancing Your Portfolio',
                duration: '10 min',
                type: 'lesson',
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Rebalancing is the process of realigning your portfolio back to your target asset allocation. Over time, some investments outperform others, shifting your allocation. Rebalancing forces you to "sell high and buy low" - the golden rule of investing.',
                        },
                        {
                            type: 'text',
                            content: 'Example: You start with 80% stocks, 20% bonds. After a bull market, stocks grow to 90% of your portfolio. Rebalancing means selling 10% of stocks and buying bonds, bringing you back to 80/20. This locks in gains and reduces risk.',
                        },
                        {
                            type: 'list',
                            title: 'When to Rebalance',
                            items: [
                                'Time-based: Quarterly or annually, regardless of market conditions. Simple and removes emotion.',
                                'Threshold-based: When any asset class drifts 5% from target. More responsive but requires monitoring.',
                                'After major life changes: New job, marriage, kids, retirement approaching. Adjust allocation to match new goals.',
                                'Never during emotional reactions: Don\'t rebalance because of fear or greed. Stick to your plan.',
                            ],
                        },
                        {
                            type: 'list',
                            title: 'Rebalancing Methods',
                            items: [
                                'Sell winners, buy losers: Sell assets that outperformed, buy those that underperformed.',
                                'New money method: Use new contributions to buy underweighted assets instead of selling.',
                                'Tax-efficient: Rebalance in tax-advantaged accounts (401k, IRA) to avoid capital gains taxes.',
                                'Automated: Many robo-advisors rebalance automatically. Worth the small fee for convenience.',
                            ],
                        },
                    ],
                    quiz: {
                        question: "What is the main purpose of rebalancing?",
                        options: [
                            "To maximize short-term gains",
                            "To realign your portfolio to target allocation and force 'sell high, buy low'",
                            "To time the market",
                            "To avoid all risk"
                        ],
                        correctIndex: 1,
                        explanation: "Rebalancing realigns your portfolio to your target allocation. It forces you to sell assets that have outperformed (sell high) and buy assets that have underperformed (buy low), which is the golden rule of investing."
                    }
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
                    quiz: {
                        question: "What is the Rule of 72 used for?",
                        options: [
                            "To calculate your credit score",
                            "To determine when your money will double",
                            "To find your retirement age",
                            "To calculate taxes"
                        ],
                        correctIndex: 1,
                        explanation: "The Rule of 72 helps you calculate when your money will double. Divide 72 by your interest rate to see how many years it takes. For example, at 8% interest, 72÷8 = 9 years to double."
                    }
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
                    quiz: {
                        question: "What is the 4% Rule in retirement planning?",
                        options: [
                            "Save 4% of your income",
                            "Withdraw 4% annually from retirement savings",
                            "Invest 4% in stocks",
                            "Pay 4% in fees"
                        ],
                        correctIndex: 1,
                        explanation: "The 4% Rule suggests you can safely withdraw 4% of your retirement savings annually without running out of money. This helps determine how much you need to retire."
                    }
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
                    quiz: {
                        question: "What are REITs?",
                        options: [
                            "Real Estate Investment Trusts",
                            "Retirement Equity Income Taxes",
                            "Rental Equipment Investment Tools",
                            "Real Estate Insurance Trusts"
                        ],
                        correctIndex: 0,
                        explanation: "REITs (Real Estate Investment Trusts) allow you to invest in real estate like stocks. You get exposure to property markets without buying physical real estate."
                    }
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
                    quiz: {
                        question: "What type of side hustle has the best scalability?",
                        options: [
                            "Freelancing (trading time for money)",
                            "Service business (lawn care)",
                            "Digital products (create once, sell forever)",
                            "Pet sitting"
                        ],
                        correctIndex: 2,
                        explanation: "Digital products have the best scalability because you create them once and can sell them infinitely without additional time investment. The lesson asks 'Can this business run without you eventually?' - digital products can."
                    }
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
                    quiz: {
                        question: "What is the truth about passive income according to Warren Buffett's quote?",
                        options: [
                            "It's completely effortless",
                            "It requires high ACTIVE work upfront",
                            "It's impossible to achieve",
                            "Only rich people can earn it"
                        ],
                        correctIndex: 1,
                        explanation: "The lesson states 'The Truth: Most passive income takes high ACTIVE work upfront.' While it becomes passive later, building passive income streams requires significant effort initially."
                    }
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
                    quiz: {
                        question: "What does 'Assets vs. Liabilities' mean in wealth building?",
                        options: [
                            "Buy things that pay you vs. things that cost you",
                            "Save money vs. spend money",
                            "Invest in stocks vs. bonds",
                            "Work hard vs. work smart"
                        ],
                        correctIndex: 0,
                        explanation: "The lesson states 'Buy things that pay you' when discussing assets vs. liabilities. Assets generate income or appreciate in value, while liabilities drain your wealth."
                    }
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
                    quiz: {
                        question: "How do you calculate your net worth?",
                        options: [
                            "Income minus expenses",
                            "Assets minus liabilities",
                            "Savings plus investments",
                            "Salary times years worked"
                        ],
                        correctIndex: 1,
                        explanation: "The lesson clearly states 'Your net worth is your true financial scoreboard. Assets minus Liabilities.' This is the fundamental formula for calculating net worth."
                    }
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
                    quiz: {
                        question: "According to the lesson, what is the reality about renting?",
                        options: [
                            "Rent is always throwing money away",
                            "Rent is the MAXIMUM you pay; mortgage is the MINIMUM",
                            "You should always buy instead of rent",
                            "Renting has no benefits"
                        ],
                        correctIndex: 1,
                        explanation: "The lesson states 'Rent is the MAXIMUM you pay; a mortgage is the MINIMUM.' Buying has hidden costs like maintenance, taxes, and interest that can exceed rent."
                    }
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
                    quiz: {
                        question: "What is the cost of waiting to invest according to the lesson?",
                        options: [
                            "No difference in timing",
                            "€100/month at 20 is better than €1000/month at 40",
                            "You should wait until you're rich",
                            "Investing young doesn't matter"
                        ],
                        correctIndex: 1,
                        explanation: "The lesson emphasizes 'The Cost of Waiting: €100/mo at 20 is better than €1000/mo at 40.' Starting early with small amounts beats starting late with large amounts due to compound interest."
                    }
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
                    quiz: {
                        question: "Why can't you save your way to being a billionaire?",
                        options: [
                            "Saving is unlimited",
                            "There's a limit to how much you can cut expenses",
                            "Billionaires don't save money",
                            "Saving is better than earning"
                        ],
                        correctIndex: 1,
                        explanation: "The lesson states 'Limit to Savings: You can only cut your coffee budget so much' and 'Unlimited Upside: You can always earn more money.' Income has no ceiling, but expenses have a floor."
                    }
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
                    quiz: {
                        question: "What is the main problem with gold as an investment?",
                        options: [
                            "It's too expensive",
                            "It's a non-productive asset that doesn't generate earnings",
                            "It's illegal to own",
                            "It always loses value"
                        ],
                        correctIndex: 1,
                        explanation: "The lesson states 'Non-Productive Asset: Gold doesn't produce earnings or dividends.' Unlike stocks or real estate, gold just sits there - it doesn't generate cash flow or compound."
                    }
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
                    quiz: {
                        question: "What happens if you miss the 10 best days in the stock market?",
                        options: [
                            "You gain more money",
                            "It kills your returns",
                            "Nothing significant",
                            "You save on fees"
                        ],
                        correctIndex: 1,
                        explanation: "The lesson warns 'Missing the Best Days: Missing just the 10 best days kills your returns.' This is why timing the market is so dangerous - you might miss the best performing days."
                    }
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
                                'Fraud Protection: Credit cards protect you better than debit.',
                            ],
                        },
                    ],
                    quiz: {
                        question: "According to the lesson, what are credit cards compared to?",
                        options: [
                            "Evil tools",
                            "Financial chainsaws - useful for pros, dangerous otherwise",
                            "Free money",
                            "Unnecessary products"
                        ],
                        correctIndex: 1,
                        explanation: "The lesson states 'Credit cards are financial chainsaws. In the hands of a pro, they are useful; otherwise, they cut you.' They're powerful tools that require skill and discipline to use safely."
                    }
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
    {
        id: 'physical-wealth',
        title: 'Physical Wealth & Health',
        icon: '💪',
        description: 'Health is wealth - fitness & wellness',
        color: '#ef4444',
        isPremium: true,
        lessons: [
            {
                id: 1,
                title: 'Why Health is Your Greatest Asset',
                duration: '2 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Your body is your most valuable investment. Without health, wealth means nothing.',
                        },
                        {
                            type: 'list',
                            title: 'The Health-Wealth Connection',
                            items: [
                                'Medical costs: Poor health drains savings faster than anything',
                                'Productivity: Healthy people earn 20-30% more over lifetime',
                                'Energy: Good health = more energy to build wealth',
                                'Longevity: Live longer to enjoy your wealth',
                                'Prevention: $1 in prevention saves $10 in treatment',
                            ],
                        },
                    ],
                },
            },
            {
                id: 2,
                title: 'The ROI of Exercise',
                duration: '2 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Exercise is the highest ROI activity you can do. It costs nothing and returns everything.',
                        },
                        {
                            type: 'list',
                            title: 'Exercise Benefits',
                            items: [
                                'Reduced healthcare costs: Save thousands annually',
                                'Increased productivity: Better focus and energy',
                                'Mental health: Reduces stress and anxiety',
                                'Better sleep: Improves decision-making',
                                'Longevity: Add years to your life',
                            ],
                        },
                    ],
                },
            },
            {
                id: 3,
                title: 'Nutrition as Investment',
                duration: '2 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'What you eat today determines your health tomorrow. Invest in quality nutrition.',
                        },
                        {
                            type: 'list',
                            title: 'Smart Nutrition Choices',
                            items: [
                                'Whole foods: More nutrients per dollar',
                                'Meal prep: Saves money and improves health',
                                'Avoid processed: Hidden costs in medical bills',
                                'Hydration: Free and essential',
                                'Moderation: Balance is key to sustainability',
                            ],
                        },
                    ],
                },
            },
            {
                id: 4,
                title: 'Sleep: The Ultimate Wealth Multiplier',
                duration: '2 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Sleep is when your body and mind compound. 7-9 hours is non-negotiable for peak performance.',
                        },
                        {
                            type: 'list',
                            title: 'Sleep Benefits',
                            items: [
                                'Better decisions: Sleep-deprived people make poor financial choices',
                                'Immune system: Fewer sick days = more income',
                                'Memory: Better learning and skill acquisition',
                                'Mood: Better relationships and networking',
                                'Free: The best investment costs nothing',
                            ],
                        },
                    ],
                },
            },
            {
                id: 5,
                title: 'Mental Health = Financial Health',
                duration: '2 min',
                type: 'lesson',
                isPremium: true,
                content: {
                    sections: [
                        {
                            type: 'text',
                            content: 'Your mental state directly impacts your financial decisions. Protect your mind like you protect your money.',
                        },
                        {
                            type: 'list',
                            title: 'Mental Wealth Strategies',
                            items: [
                                'Stress management: Stress leads to impulse spending',
                                'Meditation: Free and scientifically proven',
                                'Social connections: Strong relationships = better opportunities',
                                'Purpose: Money without meaning is empty',
                                'Therapy: Investing in mental health pays dividends',
                            ],
                        },
                    ],
                },
            },
        ],
    },
];
