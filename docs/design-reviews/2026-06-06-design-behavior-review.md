# Skola Marketing: Design and Behavior Review

## Executive verdict

**Design-system maturity: 70/100**

The site is clean, credible, and easy to scan. It communicates the category and
offers a clear demo CTA. The main conversion weakness is lack of product proof:
the pages make strong claims but show little of the actual experience, customer
evidence, implementation model, or trust posture.

## What works

- Clear headline and consistent primary CTA.
- Strong readability, spacing, and restrained color use.
- School-oriented language is direct and regionally relevant.
- Demo and contact forms are straightforward.
- Navigation and footer remain visually consistent.

## Critical findings

### P0: Show the product, not only feature descriptions

The home page presents six text-heavy cards without screenshots, workflows, or
outcomes. School buyers need to understand what teachers, students, parents, and
leaders will actually see.

Add:

- Annotated product screenshots.
- A three-step stakeholder journey.
- Before/after operational outcomes.
- A short interactive or recorded demo.
- Role-specific proof for teacher workload and parent visibility.

### P0: Build trust for school procurement

The pages need stronger evidence for a decision involving child data and school
operations.

Include security, privacy, hosting, consent, accessibility, implementation time,
support, integrations, and data ownership. Add customer proof only when it is
verifiable.

### P1: Reduce form friction and uncertainty

The demo form is long and provides little explanation of what happens after
submission.

- Mark required and optional fields.
- Explain response time and meeting format.
- Add validation and error recovery.
- Preserve entries after validation failure.
- Consider collecting only essential fields first.

## Design-system findings

### Brand and visual language

- The blue/neutral palette is dependable but generic.
- Introduce a small set of recognizable learning visuals, diagrams, and data patterns.
- Create illustration and screenshot treatments that also work inside the product.
- Keep gradients and decorative effects restrained.

### Content components

Build reusable sections for:

- Outcome-led hero with product proof.
- Stakeholder workflow.
- Product screenshot with annotations.
- Metric/testimonial proof.
- Security and privacy trust panel.
- FAQ and implementation timeline.
- CTA band with one primary action.

### Consistency issues

- Footer information architecture should be deduplicated and expanded deliberately.
- CTA copy varies between `Book a Demo`, `Book a Free Demo`, and
  `Book a School Demo`; standardize by funnel stage.
- Product card body copy is long and visually uniform.
- Forms need shared field, helper, error, success, and disabled states.

## Behavior and accessibility

- Provide visible focus states and verify navigation contrast.
- Ensure form errors are announced and associated with their fields.
- Add a clear post-submit success state with next steps.
- Avoid relying on placeholder text as instructions.
- Mobile navigation and long forms need explicit responsive verification.
- Floating third-party controls should not obscure content or keyboard focus.

## Recommended sequence

1. Add real product screenshots and stakeholder journey proof.
2. Add privacy, security, implementation, and support trust content.
3. Simplify and instrument the demo funnel.
4. Standardize CTA language, footer taxonomy, and form components.
5. Add proof-oriented visual assets and run mobile/accessibility conversion testing.
