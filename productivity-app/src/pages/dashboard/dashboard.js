import React, { useState } from "react";
import styles from "./dashboard.module.css";
import { Button, Modal, Box, Select, MenuItem, TextField } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import NewTaskForm from "../../components/newTaskForm/newTaskForm";
import NewTodoForm from "../../components/newTodoForm/newTodoForm";
import dayjs from "dayjs";

// shows general metrics
// add/remove? task
// maybe add a time tracker to task???

// new day = new session
// todo list
// add/remove/complete todo item
// give todo item priority

const monthString = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function Dashboard() {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
    const [isNewTodoModalOpen, setIsNewTodoModalOpen] = useState(false);

    const showTaskModal = () => {
        setIsNewTaskModalOpen(true);
    }
    const handleCloseTaskModal = () => {
        setIsNewTaskModalOpen(false);
    }

    const showTodoModal = () => {
        setIsNewTodoModalOpen(true);
    }
    const handleCloseTodoModal = () => {
        setIsNewTodoModalOpen(false);
    }

    const submitTaskForm = () => {

    }

    return (
        <div className={styles.dashBoardContainer}>
            <h1 className={styles.title}>
                Hello User
            </h1>
            <div className={styles.contentContainer}>
                <div className={styles.taskContainer}>
                    <span className={styles.currentDate}>
                        Today is: {currentDate.format('MMM/DD/YYYY')}
                    </span>
                    <div style={{ float: 'right', marginRight: "20px" }}>
                        <Button
                            variant="outlined"
                            onClick={showTaskModal}
                            className={styles.newButton}>
                            Add New Task
                        </Button>
                        <Modal
                            open={isNewTaskModalOpen}
                            onClose={handleCloseTaskModal}>
                            <Box className={styles.taskFormModal}>
                                <h1>
                                    New Task
                                </h1>
                                <NewTaskForm />
                                <Button
                                    className={styles.cancelModalButton}
                                    onClick={handleCloseTaskModal}>
                                    Cancel
                                </Button>
                            </Box>
                        </Modal>
                    </div>
                    <div className={styles.taskContentWrapper}>
                        <div className={styles.taskPieChartContainer}>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, label: 'series A' },
                                            { id: 1, value: 15, label: 'series B' },
                                            { id: 2, value: 20, label: 'series C' },
                                        ],
                                    },
                                ]}
                                legend={{ hidden: true }}
                                margin={{ right: 0 }}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.todoContainer}>
                    <span className={styles.todoTitle}>Todos</span>
                    <div style={{ float: 'right', marginRight: "10px" }}>
                        <Button
                            onClick={showTodoModal}
                            className={styles.newButton}
                            variant="outlined">
                            Add New Todo
                        </Button>
                        <Modal
                            open={isNewTodoModalOpen}
                            onClose={handleCloseTodoModal}>
                            <Box className={styles.taskFormModal}>
                                <h1>
                                    New Todo
                                </h1>
                                <NewTodoForm todayDate={currentDate} />
                                <Button
                                    className={styles.cancelModalButton}
                                    onClick={handleCloseTodoModal}>
                                    Cancel
                                </Button>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;