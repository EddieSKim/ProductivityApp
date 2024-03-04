import React, { useState } from "react";
import styles from "./newTaskForm.module.css";
import { Select, MenuItem, TextField, Button, InputLabel } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function NewTaskForm() {
    const [taskDescription, setTaskDescription] = useState("");

    const [taskCategory, setTaskCategory] = useState("other");

    const [hoursSpent, setHoursSpent] = useState(0);
    const [hoursError, setHoursError] = useState(false);
    const [hoursSpentErrorMessage, setHoursSpentErrorMessage] = useState("");

    const handleHoursSpent = (event) => {
        const value = event.target.value;
        setHoursSpent(value);

        if (value === "" || isNaN(value) || value <= 0 || value > 24) {
            setHoursError(true);
            setHoursSpentErrorMessage("Please enter a whole number between 1 and 24");
        } else {
            setHoursError(false);
            setHoursSpentErrorMessage("");
        }
    }

    const handleTaskCategoryChange = (event) => {
        setTaskCategory(event.target.value);
    }

    return (
        <div className={styles.taskFormContainer}>
            <InputLabel sx={{ marginBottom: "5px" }}>Select Task Category</InputLabel>
            <Select
                className={styles.categorySelect}
                value={taskCategory}
                onChange={handleTaskCategoryChange}>
                <MenuItem value="work">
                    <div className={styles.selectorItem}>
                        <WorkIcon sx={{ marginRight: "5px" }} />Work
                    </div>
                </MenuItem>
                <MenuItem value="project">
                    <div className={styles.selectorItem}>
                        <PsychologyIcon sx={{ marginRight: "5px" }} />Project
                    </div>
                </MenuItem>
                <MenuItem value="study">
                    <div className={styles.selectorItem}>
                        <SchoolIcon sx={{ marginRight: "5px" }} />Study
                    </div>
                </MenuItem>
                <MenuItem value="reading">
                    <div className={styles.selectorItem}>
                        <AutoStoriesIcon sx={{ marginRight: "5px" }} />Reading
                    </div>
                </MenuItem>
                <MenuItem value="other">
                    <div className={styles.selectorItem}>
                        <MoreHorizIcon sx={{ marginRight: "5px" }} />Other
                    </div>
                </MenuItem>
            </Select>
            <TextField
                className={styles.taskTextInput}
                multiline
                rows={3}
                label="Task Description"
                inputProps={{
                    maxLength: 250,
                }} />
            <TextField
                className={styles.taskTextInput}
                error={hoursError}
                type="number"
                label="Hours spent"
                value={hoursSpent}
                onChange={handleHoursSpent}
                helperText={hoursSpentErrorMessage}
                inputProps={{
                    min: 0,
                    max: 24,
                }} />
            <Button
                className={styles.submitButton}
                variant="contained">
                Submit
            </Button>
        </div>
    )
}

export default NewTaskForm;