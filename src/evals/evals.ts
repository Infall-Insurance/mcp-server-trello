//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const get_cards_by_list_idEval: EvalFunction = {
    name: 'get_cards_by_list_id Tool Evaluation',
    description: 'Evaluates the get_cards_by_list_id tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Can you fetch all cards from the Trello list with ID abc123?");
        return JSON.parse(result);
    }
};

const get_listsEval: EvalFunction = {
    name: 'get_lists Tool Evaluation',
    description: 'Evaluates the get_lists tool by retrieving all lists from a specified board',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please retrieve all lists from the board with ID 12345 and provide their names.");
        return JSON.parse(result);
    }
};

const get_recent_activityEvalFunction: EvalFunction = {
    name: 'get_recent_activity Tool Evaluation',
    description: 'Evaluates the ability to fetch recent activity on the Trello board',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Fetch the recent activity on the Trello board, limit it to 5 items");
        return JSON.parse(result);
    }
};

const add_card_to_listEval: EvalFunction = {
    name: 'add_card_to_listEval',
    description: 'Evaluates the add_card_to_list tool',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please add a new card named 'Demo Card' to the list with ID 'abc123', with a description of 'This is a test card', due date '2023-12-31T12:00:00Z', and a label 'priority'.");
        return JSON.parse(result);
    }
};

const update_card_detailsEval: EvalFunction = {
    name: 'update_card_details Evaluation',
    description: 'Evaluates the update_card_details tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please update the card with ID 'abc123' to have the name 'Updated Card Name', the description 'New description for the card', a due date of '2024-01-01T10:00:00Z', and labels ['priority','review'].");
        return JSON.parse(result);
    }
};

const get_board_membersEval: EvalFunction = {
    name: 'get_board_members Evaluation',
    description: 'Evaluates the get_board_members tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please get all members of the board with ID 'abc123' and show their names and usernames.");
        return JSON.parse(result);
    }
};

const assign_member_to_cardEval: EvalFunction = {
    name: 'assign_member_to_card Evaluation',
    description: 'Evaluates the assign_member_to_card tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please assign the member with ID 'member123' to the card with ID 'card456'.");
        return JSON.parse(result);
    }
};

const remove_member_from_cardEval: EvalFunction = {
    name: 'remove_member_from_card Evaluation',
    description: 'Evaluates the remove_member_from_card tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please remove the member with ID 'member123' from the card with ID 'card456'.");
        return JSON.parse(result);
    }
};

const get_board_labelsEval: EvalFunction = {
    name: 'get_board_labels Evaluation',
    description: 'Evaluates the get_board_labels tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please get all labels from the board with ID 'abc123' and show their names and colors.");
        return JSON.parse(result);
    }
};

const create_labelEval: EvalFunction = {
    name: 'create_label Evaluation',
    description: 'Evaluates the create_label tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please create a new label named 'Urgent' with color 'red' on the board.");
        return JSON.parse(result);
    }
};

const update_labelEval: EvalFunction = {
    name: 'update_label Evaluation',
    description: 'Evaluates the update_label tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please update the label with ID 'label123' to have the name 'High Priority' and color 'orange'.");
        return JSON.parse(result);
    }
};

const delete_labelEval: EvalFunction = {
    name: 'delete_label Evaluation',
    description: 'Evaluates the delete_label tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please delete the label with ID 'label123' from the board.");
        return JSON.parse(result);
    }
};

const get_card_historyEval: EvalFunction = {
    name: 'get_card_history Evaluation',
    description: 'Evaluates the get_card_history tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please get the history of the card with ID 'card123' and show the last 10 actions.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [get_cards_by_list_idEval, get_listsEval, get_recent_activityEvalFunction, add_card_to_listEval, update_card_detailsEval, get_board_membersEval, assign_member_to_cardEval, remove_member_from_cardEval, get_board_labelsEval, create_labelEval, update_labelEval, delete_labelEval, get_card_historyEval]
};
  
export default config;
  
export const evals = [get_cards_by_list_idEval, get_listsEval, get_recent_activityEvalFunction, add_card_to_listEval, update_card_detailsEval, get_board_membersEval, assign_member_to_cardEval, remove_member_from_cardEval, get_board_labelsEval, create_labelEval, update_labelEval, delete_labelEval, get_card_historyEval];