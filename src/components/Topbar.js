import React, { useEffect, useState } from "react";
import { Navbar, Link, Text, Switch, changeTheme , useTheme } from "@nextui-org/react";
import { AcmeLogo } from "./Acemelogo";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export const Topbar = () => {

  const { type, isDark } = useTheme();

  const handleChange = () => {
    // const nextTheme = isDark ? 'light' : 'dark';
    const storageTheme = window.localStorage.getItem('data-theme');
    const nextTheme = storageTheme === 'dark' ? 'light' : 'dark';

    window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
    changeTheme(nextTheme);
  }


  const collapseItems = [
    "About Me",
    "Skill Section",
    "Experience",
    "Contact Me",
  ];

  const [active, setActive] = useState({
    about: true,
    skills: false,
    experience: false,
    project : false,
    contact: false,
  })

  const handleSkillsClick = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
    setActive({
      about: false,
      skills: true,
      experience: false,
      project : false,
      contact: false,
    });
  };

  const handleAboutClick = () => {
    // scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActive({
      about: true,
      skills: false,
      experience: false,
      project : false,
      contact: false,
    });
  };

  const handleExperienceClick = () => {
    const experienceSection = document.getElementById("experience");
    experienceSection.scrollIntoView({ behavior: "smooth" });
    setActive({
      about: false,
      skills: false,
      experience: true,
      project : false,
      contact: false,
    });
  };

  const handleProjectClick = () => {
    const projectSection = document.getElementById("project");
    projectSection.scrollIntoView({ behavior: "smooth" });
    setActive({
      about: false,
      skills: false,
      experience: false,
      project : true,
      contact: false,
    });
  };
  

  // const handleContactClick = () => {
  //   const contactSection = document.getElementById("contact");
  //   contactSection.scrollIntoView({ behavior: "smooth" });
  //   setActive({
  //     about: false,
  //     skills: false,
  //     experience: false,
  //     project : false,
  //     contact: true,
  //   });
  // };

  useEffect(() => {
    // check which section is visible on the screen and set the active state
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const experienceSection = document.getElementById("experience");
      const projectSection = document.getElementById("project");
      const contactSection = document.getElementById("contact");

      const skillsSectionPosition = skillsSection.getBoundingClientRect();
      const experienceSectionPosition = experienceSection.getBoundingClientRect();
      const projectSectionPosition = projectSection.getBoundingClientRect();
      const contactSectionPosition = contactSection.getBoundingClientRect();

      if (skillsSectionPosition.top < 100 && experienceSectionPosition.top > 100) {
        setActive({
          about: false,
          skills: true,
          experience: false,
          project : false,
          contact: false,
        });
      } else if (experienceSectionPosition.top < 100 && projectSectionPosition.top > 100) {
        setActive({
          about: false,
          skills: false,
          experience: true,
          project : false,
          contact: false,
        });
      } else if (projectSectionPosition.top < 100) {
        setActive({
          about: false,
          skills: false,
          experience: false,
          project : true,
          contact: false,
        });
      } else if (contactSectionPosition.top < 100) {
        setActive({
          about: false,
          skills: false,
          experience: false,
          project : false,
          contact: true,
        });
      } else {
        setActive({
          about: true,
          skills: false,
          experience: false,
          project : false,
          contact: false,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <Navbar variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          ARGHYA
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        <Navbar.Link isActive={active.about} onClick={handleAboutClick} css={{ cursor: 'pointer' }}>
          About Me
        </Navbar.Link>
        <Navbar.Link isActive={active.skills} onClick={handleSkillsClick} css={{ cursor: 'pointer' }}>Skill Section</Navbar.Link>
        <Navbar.Link  isActive={active.experience} onClick={handleExperienceClick} css={{ cursor: 'pointer' }}>Experience</Navbar.Link>
        <Navbar.Link  isActive={active.project} onClick={handleProjectClick} css={{ cursor: 'pointer' }}>Project</Navbar.Link>
        {/* <Navbar.Link isActive={active.contact} onClick={handleContactClick} css={{ cursor: 'pointer' }} >Contact Me</Navbar.Link> */}
      </Navbar.Content>
      
      <Navbar.Content>
      <Switch
            checked={isDark}
            size="xl"
            iconOff={<SunIcon filled />}
            iconOn={<MoonIcon filled />}
            onChange={handleChange}
          />
      </Navbar.Content>

      <Navbar.Collapse showIn="xs">
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              // isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
    </Navbar>
  );
};
