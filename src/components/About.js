import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode
} from '@chakra-ui/core';
import { FaGraduationCap } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import PhaedraLogo from '../assets/images/phaedra.jpeg';
import BrainxLogo from '../assets/images/brainxtech.png';
import CodenyaLogo from '../assets/images/codenya.png';
import BrainplowLogo from '../assets/images/brainplow.jpg';
import UniLogo from '../assets/images/fast.png';

function Company({ title, role, skills, logo_url, period, logo, colorMode }) {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ shadow: 'md' }}
      borderColor={`mode.${colorMode}.border`}
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            rounded="full"
            htmlWidth="50px"
            objectFit="cover"
            src={logo}
            alt="Brainx technologies"
          />
          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
              {title}
            </Heading>
            <Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
              {role}
            </Heading>
          </Stack>
        </Flex>
        <Stack>
          <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
            {period}
          </Text>
        </Stack>
      </Flex>
      <Stack spacing={2} mt={3} isInline alignItems="center">
        {skills.split(',').map(skill => (
          <Tag
            size="sm"
            padding="0 3px"
            key={skill}
            color="#4299E1"
            fontWeight="bold"
            color={`mode.${colorMode}.career.subtext`}
            bgColor={`mode.${colorMode}.career.tagBG`}
          >
            {skill}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
}

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      as="main"
      padding="1.5rem"
      color="#2D3748"
      backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
    >
      <Stack spacing={2} marginBottom={8}>
        <Heading color={`mode.${colorMode}.text`}>Hi, I'm Ahmad</Heading>
        <Text color={`mode.${colorMode}.subtext`}>
          I am a Full Stack developer, an open source lover and a writer from
          Pakistan.
        </Text>
        <Text color={`mode.${colorMode}.subtext`}>
          This is my digital garden, where I write about the things I'm working
          on and share what I've learned.
        </Text>
      </Stack>
      <Stack marginBottom={8}>
        <Heading color={`mode.${colorMode}.text`}>Skills</Heading>
        <Stack
          padding={4}
          borderLeft="4px solid"
          borderColor={`mode.${colorMode}.skills.border`}
          color={`mode.${colorMode}.career.subtext`}
          _hover={{ shadow: 'md' }}
          backgroundColor={`mode.${colorMode}.cardBG`}
          rounded="md"
          fontWeight="bold"
        >
          <Text>Ruby, Ruby on Rails, Javascript, React, Python</Text>
          <Text>MySQL, PostgreSQL, Redis</Text>
          <Text>Heroku, Amazon Web Services, Digital Ocean</Text>
          <Text>Software Architecture, Project Management</Text>
        </Stack>
      </Stack>
      <Stack spacing={4} marginBottom={6}>
        <Heading color={`mode.${colorMode}.career.text`}>
          <Flex alignItems="center">
            <Text as="span" color={`mode.${colorMode}.career.text`}>
              Career
            </Text>
            <Stack pl={3}>
              <Box
                as={BsFillBriefcaseFill}
                size="25px"
                color={`mode.${colorMode}.career.subtext`}
              />
            </Stack>
          </Flex>
        </Heading>
        <Company
          title="Phaedra Solutions"
          role="Senior Software Engineer"
          skills="Ruby, Ruby on Rails, Javascript, React, Devops"
          period="2019 - Present"
          logo={PhaedraLogo}
          colorMode={colorMode}
        />
        <Company
          title="Brainx Technologies"
          role="Software Engineer"
          skills="Ruby, Ruby on Rails, Javascript, Python"
          period="2018 - 2019"
          logo={BrainxLogo}
          colorMode={colorMode}
        />
        <Company
          title="Codenya Studio"
          role="Co-founder, CTO"
          skills="Project Management, Web Development, Devops"
          period="2018 - Present"
          logo={CodenyaLogo}
          colorMode={colorMode}
        />
        <Company
          title="Brainplow"
          role="Software Engineer"
          skills="Javascript, python, Angular"
          period="2017 - 2018"
          logo={BrainplowLogo}
          colorMode={colorMode}
        />
      </Stack>
      <Stack spacing={4}>
        <Heading>
          <Flex alignItems="center">
            <Text as="span" color={`mode.${colorMode}.career.text`}>
              Education
            </Text>
            <Stack pl={2}>
              <Box
                as={FaGraduationCap}
                color={`mode.${colorMode}.career.subtext`}
              />
            </Stack>
          </Flex>
        </Heading>
        <Company
          title="National University of Computer and Emerging Sciences"
          role="Bachelor's Degree in Computer Science"
          skills="Project Management, Web Development, Algorithms, Data Structures"
          period="2013 - 2017"
          logo={UniLogo}
          colorMode={colorMode}
        />
      </Stack>
    </Stack>
  );
};

export default About;
