"use client"

// HOOKS
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

// COMPONENTS
import MainWrapper from '@/components/MainWrapper';
import Header from '@/components/Header';
import TaskInput from '@/components/TaskInput';
import DisplayTasks from '@/components/DisplayTasks';
import DisplayCompletedTasks from '@/components/DisplayCompletedTasks';

// API
import getTasksByBucketId from '@/api/getTasksByBucketId';
import getBuckets from '@/api/getBuckets';

// STORES
import { useCurrentTabStore, useHomePageStore } from '@/store/index.js';

type NameParams = {
  name: string
}

export default function BucketPage () {

  const { name } = useParams<NameParams>();
  const setCurrentTab = useCurrentTabStore(status => status.setCurrentTab);
  const setIsHomePage = useHomePageStore(status => status.setIsHomePage);

  useEffect(() => {
    setCurrentTab(name)
    setIsHomePage(false);
  }, []);


  const { data: buckets, isLoading } = useQuery({
    queryKey: ['buckets'],
    queryFn: getBuckets,
    enabled: !!name
  });

  const getBucket: any = () => buckets?.find((bucket: any) => bucket.name === name);

  const displayHeaderTitle: any = () => {
    if (isLoading) return name;
    return getBucket()?.emoji + ' ' + name
  }

  const { data:tasks, isLoading: isTasksLoading } = useQuery({
    queryKey: ['tasks', getBucket()?.id],
    queryFn: () => getTasksByBucketId({ id: getBucket()?.id }),
    enabled: !!buckets && !!getBucket()?.id
  });

  return (
    <MainWrapper>
      <Header tab={displayHeaderTitle()} />
      <TaskInput bucket_id={getBucket()?.id}/>
      <DisplayTasks 
        tasks={tasks?.filter((itm: any) => !itm.is_completed)} 
        isTasksLoading={isTasksLoading} 
      />
      <DisplayCompletedTasks 
        tasks={tasks?.filter((itm: any) => itm.is_completed)} 
        isTasksLoading={isTasksLoading} 
      />
    </MainWrapper>
  )
}
