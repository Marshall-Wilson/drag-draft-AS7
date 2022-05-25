insert into "EarnerTypes" (name, description, category, value, "createdAt", "updatedAt") 
    values ('Maxi Challenge Tops', 'The top queens for a week''s maxi challenge', 'Judging', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Maxi Challenge Winner', 'The winning queen(s) for a week''s maxi challenge', 'Judging', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Lipsync Winner', 'The winning queen(s) of a lipsync', 'Lipsync', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Lipsync Reveal', 'Any time a queen has a reveal during a lipsync', 'Lipsync', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Wardrobe Malfunction', 'Any time a queen has an accidental costume issue during a lipsync (wig falls off, costume breaks, shoes fall off', 'Lipsync', -2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Forgets The Words', 'Any time a queen clearly forgets the words to a lipsync (majority rule)', 'Lipsync', -2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Puts Own Name', 'Any time a queen puts her own lipstick in the box', 'Rare', 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Runway Reveal', 'Any time a queen has a costume reveal during a runway', 'Runway', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Season Winner', 'The winner(s) of the season', 'Singleton', 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Top Queens Of The Season', 'The top queens of the season', 'Singleton', 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Disqualifying Injury', 'Any queen who has to leave the season due to an injury', 'Rare', 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Showmance', 'Any queens who seem to be romantically involved (majority rule)', 'Rare', 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Can''t Sew', 'Any queen who doesn''t know how to sew', 'Rare', -2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Leaves The Season', 'Any queen who leaves the season for a reason not shown above', 'Rare', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Mini Challenge Winner', 'The winning queen(s) of a mini challenge', 'Challenge', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Cries', 'Any queen who cries during an episode', 'Challenge', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Tragic Backstory', 'Any time a queen shares her tragic backstory (majority rule)', 'Challenge', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Yelling Fight', 'Any time a queen is angrily yelling at another queen', 'Challenge', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Runway Error', 'Any issue during a queen''s runway walk (costume falls apart, trips on accident, etc.)', 'Runway', -2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Legendary Legend Star', 'Any queen who wins a Legendary Legend Star', 'Judging', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Blocking Plunger', 'Any queen who receives the blocking plunger', 'Judging', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);