/**************************************
 * OJT DAILY ROUTINE SIMULATION
 * Simple Asynchronous JavaScript
 **************************************/

/* -----------------------------------
   PART 1: START OF OJT DAY (CALLBACK)
----------------------------------- */

function wakeUp() {
  console.log("🕗 I woke up and got ready for my OJT.");
}

function goToOJT(callback) {
  console.log("🛵Going to PPO Office...");

  setTimeout(() => {
    callback();
  }, 2000); // travel time
}

function arrivedAtOJT() {
  console.log("🏢 I arrived at the workplace.");
  startOJT();
}

/* -----------------------------------
   PART 2: STRESS MANAGEMENT (PROMISE)
----------------------------------- */

function checkStress() {
  return new Promise((resolve, reject) => {
    let stress = Math.random(); // random stress level

    setTimeout(() => {
      if (stress < 0.5) {
        resolve("😌 Stress is low. I continue working.");
      } else {
        reject("😓 Stress is high. I take a short break.");
      }
    }, 1000);
  });
}

/* -----------------------------------
   PART 3: DAILY TASKS (ASYNC / AWAIT)
----------------------------------- */

function doTask(taskName, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✔️ ${taskName} done`);
      resolve();
    }, time);
  });
}

async function dailyTasks() {
  try {
    await doTask("Checking emails", 1000);
    await doTask("Working on assigned tasks", 2000);
    await doTask("Lunch break", 1500);
    await doTask("Writing daily report", 1000);
  } catch (error) {
    console.log("❌ Error while doing tasks.");
  }
}

/* -----------------------------------
   PART 4: API CALL (SIMULATED)
----------------------------------- */

async function fetchDailyRoutineData() {
  console.log("\n🌐 Getting daily routine data from system...");

  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        attendance: "Present",
        tasksCompleted: 4,
        remarks: "Good performance!"
      });
    }, 1200);
  });

  console.log("📊 Daily Routine Data:");
  console.log(data);
}

/* -----------------------------------
   PART 5: PROGRAM FLOW
----------------------------------- */

async function startOJT() {
  await dailyTasks();

  try {
    const result = await checkStress();
    console.log(result);
  } catch (result) {
    console.log(result);
  }

  await fetchDailyRoutineData();

  console.log("\n✅ OJT day is finished. I'm going home.");
}

/* -----------------------------------
   PROGRAM START
----------------------------------- */

console.log("🌄 OJT DAY STARTED\n");

wakeUp();
goToOJT(arrivedAtOJT);

