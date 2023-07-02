import type { Meta, StoryObj } from '@storybook/react';
import Main from '.';

const meta: Meta<typeof Main> = {
  title: 'Main', // Nome do componente no Storybook
  component: Main,
  tags: ['autodocs']
};

export default meta;

export const Basic: StoryObj<typeof Main> = {
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
};

export const Secundary: StoryObj<typeof Main> = {
  args: {
    title: 'React Avançado 2',
    description: 'TypeScript, ReactJS, NextJS e Styled Components 2'
  }
};
