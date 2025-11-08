"use client";
import { AskQuestionSchema } from '@/lib/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const QuestionForm = () => {
    const form = useForm({
        resolver:zodResolver(AskQuestionSchema),
        defaultValues:{
            title:'',
            content:'',
            tags:[]
        }
    });
    const handleCreateQuestion = (data: any) => {
        console.log(data);
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCreateQuestion)} className='flex w-full flex-col gap-10'>
            <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                    Question Title <span className='text-primary-500'>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                    Be specific and imagine you're asking a question to another person.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                    Detailed explanation of your question <span className='text-primary-500'>*</span>
                </FormLabel>
                <FormControl>
                  Editor
                </FormControl>
                <FormDescription>
                    Introduce the details of your question and expand on what you put in the title.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='tags'
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                    Tags <span className='text-primary-500'>*</span>
                </FormLabel>
                <FormControl>
                  <div>
                    <Input placeholder='Add tags'
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                    {...field}
                  />
                  Tags
                  </div>
                </FormControl>
                <FormDescription>
                    Add up to 3 tags to describe what your question is about. You need to press enter to add each tag.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='mt-16 flex justify-end'>
            <Button className='primary-gradient w-fit !text-light-900' type='submit'>Ask A Question</Button>
          </div>
        </form>
    </Form>
  )
}

export default QuestionForm