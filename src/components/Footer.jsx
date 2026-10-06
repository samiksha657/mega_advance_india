
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "../data";
const ICONS = { Facebook, Instagram, LinkedIn: Linkedin, YouTube: Youtube };

export default function Footer() {
    return (
        <footer className="border-t border-white bg-ink text-white/80">
            <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">

                <div>
                    <p className="font-display text-xl font-bold text-white">{SITE.name}</p>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed">
                        Job-focused computer, accounting, programming and AI courses,
                        with placement support for every student.
                    </p>

                    <div className="mt-5 flex gap-3">
                        {Object.entries(SITE.socials).map(([name, href]) => {
                            const Icon = ICONS[name];

                            if (!Icon) return null;

                            return (
                                <a
                                    key={name}
                                    href={href}
                                    aria-label={name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-sky hover:text-ink"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <FooterList
                    title="Explore"
                    links={[
                        ["/", "Home"],
                        ["/courses", "Courses"],
                        ["/contact", "Contact"],
                    ]}
                />

                <FooterList
                    title="Policies"
                    links={[
                        ["/privacy-policy", "Privacy Policy"],
                        ["/terms", "Terms & Conditions"],
                    ]}
                />

                <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                        Contact us
                    </h3>

                    <ul className="mt-4 space-y-3 text-sm">
                        <li className="flex gap-3">
                            <Phone
                                size={18}
                                className="mt-0.5 shrink-0 text-sky"
                            />

                            <a
                                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                                className="hover:text-white"
                            >
                                {SITE.phone}
                            </a>
                        </li>

                        <li className="flex gap-3">
                            <Mail
                                size={18}
                                className="mt-0.5 shrink-0 text-sky"
                            />

                            <a
                                href={`mailto:${SITE.email}`}
                                className="break-all hover:text-white"
                            >
                                {SITE.email}
                            </a>
                        </li>

                        <li className="flex gap-3">
                            <MapPin
                                size={18}
                                className="mt-0.5 shrink-0 text-sky"
                            />

                            <span>{SITE.address}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-sm sm:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} Mega Advance India
                    </p>

                    <p>
                        Designed &amp; Developed by{" "}
                        <a
                            href="https://webseeder.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sky underline-offset-4 hover:underline"
                        >
                            WebSeeder Technologies
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterList({ title, links }) {
    return (
        <div>
            <h3 className="font-display text-lg font-semibold text-white">
                {title}
            </h3>

            <ul className="mt-4 space-y-2.5 text-sm">
                {links.map(([to, label]) => (
                    <li key={label}>
                        <Link
                            to={to}
                            className="hover:text-white"
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

