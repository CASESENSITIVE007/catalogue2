import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | Alif Global",
};

const calendarDays = [
  { day: 28, muted: true },
  { day: 29, muted: true },
  { day: 30, muted: true },
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4, disabled: true },
  { day: 5 },
  { day: 6 },
  { day: 7, selected: true },
  { day: 8 },
  { day: 9 },
  { day: 10, disabled: true },
  { day: 11, disabled: true },
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15 },
  { day: 16 },
  { day: 17, disabled: true },
  { day: 18, disabled: true },
];

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-xl">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="grid lg:grid-cols-2 gap-lg items-center">
          <Reveal className="space-y-md">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
              Global Network
            </span>
            <h1 className="font-display-lg text-[32px] leading-tight md:text-display-lg md:leading-none text-on-background">
              Connect with our <br />
              <span className="text-primary">Executive Team.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[32rem]">
              Whether you&apos;re looking for enterprise solutions or
              specialized support, we are ready to assist
              with architectural precision.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="relative group">
            <div className="absolute -inset-2 bg-primary-fixed/30 rounded-xl blur-xl group-hover:bg-primary-fixed/40 transition duration-1000" />
            <div className="relative bg-surface border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                alt="A cinematic, high-angle shot of the Dubai International Financial Centre skyline at sunset."
                src="/contactHero.png"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Department Contacts & Form Bento Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <Reveal className="lg:col-span-8 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/20 shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <h2 className="font-headline-lg text-headline-lg mb-md">
              Professional Inquiry
            </h2>
            <form className="grid md:grid-cols-2 gap-md">
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant">
                  FULL NAME
                </label>
                <input
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-sm font-body-md outline-none"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant">
                  WORK EMAIL
                </label>
                <input
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-sm font-body-md outline-none"
                  placeholder="john@enterprise.com"
                  type="email"
                />
              </div>
            
              <div className="space-y-base md:col-span-2">
                <label className="font-label-md text-label-md text-on-surface-variant">
                  MESSAGE
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-sm font-body-md resize-none outline-none"
                  placeholder="Briefly describe your requirements..."
                  rows={4}
                />
              </div>
              <div className="md:col-span-2 pt-sm">
                <button
                  className="shine bg-primary text-on-primary px-xl py-sm font-label-md text-label-md rounded-lg hover:scale-[1.02] transition-transform flex items-center gap-xs"
                  type="submit"
                >
                  Submit Inquiry
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </Reveal>

          <RevealGroup delay={0.1} className="lg:col-span-4 flex flex-col gap-gutter">
            <RevealItem className="bg-primary-container/10 p-md rounded-xl border border-primary-container/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="material-symbols-outlined text-primary mb-sm block">
                payments
              </span>
              <h3 className="font-headline-md text-headline-md mb-xs">
                Sales
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                Strategic partnerships &amp; enterprise deals.
              </p>
              <a
                className="font-label-md text-label-md text-primary hover:underline"
                href="mailto:sales@alifglobal.com"
              >
                sales@alifglobal.com
              </a>
            </RevealItem>
            <RevealItem className="bg-secondary-container/20 p-md rounded-xl border border-secondary-container/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="material-symbols-outlined text-secondary mb-sm block">
                support_agent
              </span>
              <h3 className="font-headline-md text-headline-md mb-xs">
                Support
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                24/7 technical assistance for existing clients.
              </p>
              <a
                className="font-label-md text-label-md text-secondary hover:underline"
                href="mailto:support@alifglobal.com"
              >
                support@alifglobal.com
              </a>
            </RevealItem>
            <RevealItem className="bg-surface-container-high p-md rounded-xl border border-outline-variant/10 flex items-center justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="font-label-md text-label-md text-on-surface">
                  Career Portal
                </h3>
                <p className="text-caption text-on-surface-variant">
                  Join our global team
                </p>
              </div>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                open_in_new
              </span>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* Location */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="grid lg:grid-cols-3 gap-gutter">
          <Reveal className="lg:col-span-1 space-y-md">
            <h2 className="font-headline-lg text-headline-lg">
              Global Headquarters
            </h2>
            <div className="p-md bg-surface-container-lowest border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-sm mb-md">
                <span className="material-symbols-outlined text-primary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-bold text-on-surface">DIFC Dubai</p>
                  <p className="text-on-surface-variant">
                    The Gate Building, Level 15
                    <br />
                    Dubai International Financial Centre
                    <br />
                    United Arab Emirates
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <p className="text-on-surface">+971 4 000 0000</p>
              </div>
              <button className="w-full py-sm border border-outline text-on-surface rounded-lg font-label-md hover:bg-inverse-surface hover:text-inverse-on-surface transition-colors">
                Get Directions
              </button>
            </div>
          </Reveal>
          <Reveal
            delay={0.15}
            className="lg:col-span-2 h-[280px] md:h-[400px] rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm relative"
          >
            <div className="w-full h-full bg-surface-container relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                alt="A minimalist, high-contrast digital map of the Dubai DIFC area with a gold marker for the Alif Global headquarters."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM_Hr9-KCht-fn2ZRKaqoUKfNxm8soGJjq6eUTWDL6Y7Imra-TOR_0hsXucFP0_7G5vEoQXZpI8uW_rAFa_kcxUlDUI2v4o9H9ekIqVxATluUZO3jP4wmI056YYjLDxIIrGeajK1juR6VnUr_jBVJ2cDCgAVQVCtu1FBwoN9grK9a5rvlwtoWiGnqwl-IC9ibrnPbXKS7Sa_VNbpuNl_8-OaTnptswXhx8SEyYurE0tZHoM22YVgnZ3AbnkCgFfmx4xXqqpX5J2g"
              />
            </div>
            <div className="absolute bottom-md left-md bg-surface/90 p-sm rounded shadow-sm flex items-center gap-xs">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-caption font-bold">
                Office Open • Closing in 4h
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Calendar Integration Section */}
      <section className="bg-inverse-surface text-inverse-on-surface py-xl">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-lg items-center">
            <Reveal className="space-y-md">
              <h2 className="font-headline-lg text-headline-lg text-inverse-primary">
                Book a Strategic Consultation
              </h2>
              <p className="text-body-lg text-inverse-on-surface/80">
                Select a preferred time slot for a private 1-on-1 session
                with our senior consultants. We offer both virtual and
                in-person sessions at our DIFC office.
              </p>
              <ul className="space-y-sm">
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-inverse-primary">
                    check_circle
                  </span>
                  <span>30-minute strategic overview</span>
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-inverse-primary">
                    check_circle
                  </span>
                  <span>Architecture-first solutioning</span>
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-inverse-primary">
                    check_circle
                  </span>
                  <span>Global scaling feasibility report</span>
                </li>
              </ul>
            </Reveal>

            <Reveal
              delay={0.15}
              className="bg-surface-container-lowest text-on-surface p-md rounded-xl shadow-xl"
            >
              <div className="flex items-center justify-between mb-md border-b border-outline-variant/20 pb-sm">
                <h3 className="font-headline-md text-headline-md">
                  October 2024
                </h3>
                <div className="flex gap-sm">
                  <button className="p-xs hover:bg-surface-container rounded-full transition-colors">
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>
                  <button className="p-xs hover:bg-surface-container rounded-full transition-colors">
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-xs text-center mb-sm">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                  (day) => (
                    <span
                      key={day}
                      className="text-caption text-on-surface-variant font-bold"
                    >
                      {day}
                    </span>
                  ),
                )}
              </div>
              <div className="grid grid-cols-7 gap-xs mb-md">
                {calendarDays.map((d, i) => (
                  <div
                    key={i}
                    className={
                      d.muted || d.disabled
                        ? "h-10 flex items-center justify-center text-on-surface-variant" +
                          (d.muted ? " opacity-30" : "")
                        : d.selected
                          ? "h-10 flex items-center justify-center rounded cursor-pointer bg-primary-fixed/50 font-bold"
                          : "h-10 flex items-center justify-center rounded cursor-pointer transition-all hover:scale-110 hover:bg-primary-fixed hover:text-on-primary-fixed"
                    }
                  >
                    {d.day}
                  </div>
                ))}
              </div>
              <div className="space-y-sm">
                <p className="font-label-md text-label-md">
                  Available Times (GMT+4)
                </p>
                <div className="flex gap-sm overflow-x-auto no-scrollbar pb-sm">
                  {["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map(
                    (time) => (
                      <button
                        key={time}
                        className="flex-shrink-0 px-md py-xs border border-outline rounded hover:bg-primary hover:border-primary hover:text-on-primary transition-colors"
                      >
                        {time}
                      </button>
                    ),
                  )}
                </div>
              </div>
              <button className="shine w-full mt-md py-sm bg-primary text-on-primary rounded font-label-md hover:opacity-90 active:scale-95 transition-all">
                Confirm Appointment
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
