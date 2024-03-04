import React, { useState } from "react";
import styles from "./newTodoForm.module.css";
import { TextField, Button, Select, MenuItem, InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FlagIcon from '@mui/icons-material/Flag';
import CloseIcon from '@mui/icons-material/Close';

function NewTodoForm({ todayDate }) {
    const [todoItem, setTodoItem] = useState("");
    const [dueDate, setDueDate] = useState(todayDate);
    const [priorityLevel, setPriorityLevel] = useState(0);

    const handleTextFieldChange = (event) => {
        setTodoItem(event.target.value);
    }

    const handlePriorityLevelChange = (event) => {
        setPriorityLevel(event.target.value);
    }

    const submitTodoForm = () => {

    }

    return (
        <div className={styles.todoFormContainer}>
            <TextField
                className={styles.formComponent}
                value={todoItem}
                label="What needs to be done?"
                onChange={handleTextFieldChange}
                inputProps={{
                    maxLength: 100,
                }} />
            <DatePicker
                className={styles.formComponent}
                value={todayDate}
                label="When should it be due?"
                minDate={todayDate} />
            <InputLabel sx={{ marginBottom: "5px" }}>Select Priority</InputLabel>
            <Select
                className={styles.prioritySelector}
                value={priorityLevel}
                onChange={handlePriorityLevelChange}>
                <MenuItem value={3}>
                    <div className={styles.selectorItem}>
                        <FlagIcon sx={{ color: "red", marginRight: "5px" }}/>Urgent
                    </div>
                </MenuItem>
                <MenuItem value={2}>
                    <div className={styles.selectorItem}>
                        <FlagIcon sx={{ color: "orange", marginRight: "5px" }}/>Normal
                    </div>
                </MenuItem>
                <MenuItem value={1}>
                    <div className={styles.selectorItem}>
                        <FlagIcon sx={{ color: "green", marginRight: "5px" }}/>Low
                    </div>
                </MenuItem>
                <MenuItem value={0}>
                    <div className={styles.selectorItem}>
                        <CloseIcon sx={{ marginRight: "5px" }} />None
                    </div>
                </MenuItem>
            </Select>
            <Button
                onClick={submitTodoForm}
                className={styles.submitButton}
                variant="contained">
                Submit
            </Button>
        </div>
    )
}

export default NewTodoForm;