# Deliverables

The demo is available [at this site](https://demo-atana-course-analytics.vercel.app/)

Source code is [at github](https://github.com/ppaann/Demo_Atana_courseAnalytics/)

1. Design document (lower part of this doc)
2. Mockup UI (mockup.pdf)
3. Demo website
4. Github source code
5. Key features
   - Drop down list to select course
   - Simple chart to display data
   - Error handling
   - responsive for mobile device

# Pre-Design Document

Before I proceed with the design, I wanted to share my initial approach and assumptions to ensure alignment. Since this is an example design exercise, I have made reasonable assumptions in the absence of full requirements. I will highlight these assumptions clearly in the design document.

## Key Design Considerations

To make the widget intuitive, scalable, and easily embeddable in the dashboard, I have considered the following:

- Handling edge cases (e.g., long course names, a large number of courses).
- Ensuring accessibility, responsiveness, and a clear visual hierarchy.
- Managing user interactions, including error handling and input validation.
- Using color strategically for different states (e.g., error, success, attention needed).
- Designing for Phase 1 (single course selection, simple dropdown) while allowing for Phase 2 (multi-course comparison, filtering).
- Structuring the widget for easy integration within the dashboard, inheriting global styles, and supporting future enhancements.

### Assumptions & Trade-offs

- General Design Approach

- The widget is primarily desktop-oriented but will be mobile-friendly (avoiding gesture/mouse-specific interactions).
- Terminology will align with user expectations to improve clarity.
- A neutral color palette will be used, with red for alerts and green for positive indicators.

### Scalability & Future-proofing

Phase 1: The user selects one course at a time (simple dropdown).
Phase 2: Multi-course selection and filtering will be introduced as the dataset grows.
The design will accommodate increasing data points without performance degradation.
Components will be modular and reusable to ensure maintainability.

### Integration with Dashboard

The widget will be embeddable and capable of communicating with other dashboard components if needed.
It will inherit global styles for a consistent look and feel.
Configuration options (e.g., default date range, refresh intervals) will be available.
Out of Scope
To maintain focus, the following areas are beyond this exercise’s scope:

### Out of Scope

- **Performance optimizations** (e.g., lazy loading, memoization).
- **Security considerations** (e.g., authentication, data protection).
- **Detailed documentation** (e.g., configuration guides, troubleshooting).

# Design Document

1.Requirements

- **Purpose:** The widget should display learner performance data in a clear and actionable way.
- **Audience:** Corporate training managers or HR professionals who need **quick insights** to make decisions and take actions.
- **Key Data Points:**

  - Course name
  - Purchased count
  - Number of registrations used
  - Average mastery score

- **Display Device:** Desktop should be the primary display device, but the app may run on tablets or show summaries on phone screens. Therefore, interactions such as tool-tips or hover effects should be avoided.

- **Pain Points:**
  - The course name may be too long to remember.
  - The data presented may not be intuitive enough.
  - Potential interruptions during data entry or viewing.

## 2. UI Structure

- **Title:** Learning Performance / Learner Progress / Learner Performance Overview

  Design thinking:

  - Clear and concise.
  - Use terms that customers are familiar with.

- **Course Name Input:** one line of text input

  - Single line text input
  - focus automatically
  - place holder: 'Course Code or Name' (place holder are different for dropdown and text input)

  Design thinking:

  - Consider the length of course name, what if text is very long?
  - what if there are hundards of course?
  - search by course name and code
  - autofill the keyword?
  - pre-load most recent course?
  - **Future:** multi-selection? show and compare multiple courses?

- **Submit button:** click the button to search

  - Action name: submit | search | query | ...
  - loading states ?

  Design thinking:

  - Button text should be an action verb, it should use the common sence from the customer. at this point I assume it is 'Query'

  - should button be enabled when there is no input?
    - if yes, this may bring unexpect error that the button is not enabled
    - if no, there may be more interactive design
      - Option 1: show error message
      - Option 2: set a default value, it can be most recent search, or something else...

- **Data Display :** Chart to display data

  - Bar for purchased and used counts
  - Number for score

  Design thinking:

  - The number of course purchased/used and the score are two different figure, should be displayed separated.
  - Use percentage is more straight forward, but make numbers available
  - Consider simple chart

- **Error Handling:**

Design thinking:

- **Input Errors:**

  - Empty input: Display a message prompting the user to enter a course name.
  - ~~Invalid input: Display a message indicating the course name is not recognized.~~

- **Network Errors:**

  - Handle network errors gracefully by displaying a message and allowing the user to retry.
  - Ensure the input remains the same so the user does not need to re-enter the course name.

- ~~**Data Errors:**~~
  - ~~If the data returned from the API is incomplete or malformed, display an appropriate error message.~~
  - ~~Log errors for further analysis and debugging.~~

## 3. Visual Design

- Layout:
  - Use a card-based design for the widget to make it modular and easy to integrate into the dashboard.
  - Prioritize hierarchy—place the most important metrics at the top.
- Typography:
  - Use clean, sans-serif fonts: Roboto.
  - Ensure font sizes are readable: 16px.
- Color Palette:

  - Use a professional, corporate-friendly palette: TailwindCSSUI
  - Use color to indicate: Error-red

  Design thinking:

  - The score use color to draw attention: Red: low score, green : high score

- Icons and Visuals:
  - Use simple, recognizable icons .
  - Ensure charts are easy to interpret at a glance.
- Accessibility:
  - Ensure the widget is navigable using a keyboard.
  - Use ARIA (Accessible Rich Internet Applications) roles and attributes to enhance accessibility.

---

### 4. Interaction Design

- **Hover States:** Add subtle hover effects to interactive elements (e.g., buttons, filters).
- **Tooltips:** Provide additional context for metrics when users hover over them.
- **Responsiveness:** Ensure the widget adapts to different screen sizes (desktop, tablet, mobile).

---

### 5. Tools and Libraries

- **UI Libraries:** Use libraries like **Material-UI**, **Ant Design**, or **Bootstrap** to speed up development.
- **Charting Libraries:** Use **Chart.js**, **D3.js**, or **Highcharts** for data visualization.
- **Code Quality:** Write clean, modular code with comments for clarity.

---

# Requirement Memo

Coding Assessment for Sr Frontend/UX/UI Engineer candidate
Background:
We produce eLearning courses that are used in corporate training, and we are developing a
new system that better gauges how learners perform in the specific training. To report this
information to our customers, we will be developing a new “dashboard” web application that
will be integrated into the customer portal area of our website.
Objective:
Demonstrate your ability to put together a web application that showcases understanding
requirements, learning and utilizing libraries to minimize development effort, writing succinct
and vigilant code, and having an eye for details.
Task:
Build a web page that prompts for an input "course identifier” code. The valid choices reflect
five of our courses (the identifier to use follows the title string): “How Was Your Day” - HWYD,
“Once and For All” - OFA, “Unintentional Still Hurts” - USH, “Uncomfortable Conversation” - UC,
and “Getting Real About Workplace Violence” - GRAWV. Upon "submit”, use the course
identifier to make a GET request to the API provided below. A response indicating the current
course utilization will then be returned. This response will include the purchased count, the
number of registrations used, and the average mastery score. You should then present this
information in a meaningful way. Feel free to use any common charting package you are
familiar with that is open source. The code for this task should be well contained and served
from a static website.
We are asking you to work on this task so we can review your design and coding skills, and we
will ask you questions about the task during a follow-up interview session. We expect that a
senior level engineer that is experienced with web design, has good coding skills, is familiar with
typical rest-based API’s as well as JavaScript libraries should not require a significant amount of
time to complete this task for demonstration and discussion.
The API URL is:
https://qcuialeirsxv5ht6crufymcjse0xmkop.lambda-url.us-east-1.on.aws/
Use an HTTP GET method request with a path of ‘/course/’ followed by the course identifier.
