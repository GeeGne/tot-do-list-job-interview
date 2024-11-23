import { supabase } from '@/lib/supabaseClient';

type AddTask = {
  newTask: string,
  priorityKey: 'none' | 'normal' | 'important' | 'critical' | null
}

async function addTask ({ newTask, priorityKey = 'none' }: AddTask) {
  try {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) throw new Error ('User not authenticated');
    
    const { data, error } = await supabase
      .from('tasks')
      .insert([{
        title: newTask,
        user_id: userData.user.id, 
        priority: priorityKey || 'none' 
      }]);
    if (error) throw new Error (`An issue has accured while saving task data`)

    return data;
  } catch (err) {
    const error = err as Error;
    console.error('Unable to get Tasks: ', error.message);
    throw err;
  }
}

export default addTask;